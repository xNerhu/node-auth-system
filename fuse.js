const { join } = require('path');
const dotenv = require('dotenv');
const { TypeChecker } = require('fuse-box-typechecker');
const {
  FuseBox,
  EnvPlugin,
  QuantumPlugin,
  Sparky,
  JSONPlugin,
  CopyPlugin,
  WebIndexPlugin,
  CSSPlugin,
  SassPlugin,
} = require('fuse-box');

const isProduction = process.env.NODE_ENV === 'prod';
const outputDir = 'build';

const testWatch = TypeChecker({
  tsConfig: './tsconfig.json',
  tsLint: './tslint.json',
  basePath: './',
  yellowOnLint: true,
  shortenFilenames: true,
  skipTsErrors: [2307],
});

if (!isProduction) {
  testWatch.runWatch('./src/');
}

dotenv.config();

class Builder {
  constructor(
    config = {
      target: '',
      name: '',
      output: '',
      instructions: '',
      watch: '',
      watchFilter,
      runWhenCompleted: false,
      devServerOptions: {},
      plugins: [],
    },
  ) {
    const { target, name, output, plugins } = config;
    this.config = config;
    this.fuseConfig = Builder.getFuseConfig(target, name, output, plugins);
  }

  static getFuseConfig(target, name, output = '$name.js', plugins = []) {
    const { RECAPTCHA_SITE_KEY } = process.env;

    return {
      target,
      homeDir: 'src/',
      output: join(outputDir, output),
      tsConfig: './tsconfig.json',
      useTypescriptCompiler: true,
      sourceMaps: target !== 'server',
      cache: !isProduction,
      plugins: [
        EnvPlugin({
          NODE_ENV: isProduction ? 'production' : 'development',
          RECAPTCHA_SITE_KEY: RECAPTCHA_SITE_KEY,
        }),
        JSONPlugin(),
        isProduction &&
          QuantumPlugin({
            bakeApiIntoBundle: name,
            treeshake: true,
            removeExportsInterop: false,
            uglify: {
              es6: true,
            },
          }),
      ].concat(plugins),
      alias: {
        '@client': '~/client/',
        '@server': '~/server/',
        '@shared': '~/shared/',
        '~': '~/',
      },
      log: {
        showBundledFiles: false,
      },
    };
  }

  async init() {
    const {
      name,
      target,
      instructions,
      watch,
      watchFilter,
      runWhenCompleted,
      devServerOptions,
    } = this.config;
    const fuse = FuseBox.init(this.fuseConfig);
    const app = fuse.bundle(name).instructions(instructions);

    if (!isProduction) {
      app.watch(watch, watchFilter);

      if (target !== 'server') {
        fuse.dev(devServerOptions);
        app.hmr();
      } else if (runWhenCompleted) {
        app.completed(proc => proc.start());
      }
    }

    return await fuse.run();
  }
}

Sparky.task('default', ['client', 'server']);

Sparky.task('server', async () => {
  await new Builder({
    name: 'server',
    target: 'server',
    instructions: '> [server/index.ts] +shared/**',
    runWhenCompleted: true,
    watch: 'server/**',
  }).init();
});

Sparky.task('client', async () => {
  await new Builder({
    name: 'client',
    instructions: '> client/index.tsx +shared/**',
    watch: 'client/**',
    output: join('public', '$name.js'),
    devServerOptions: {
      fallback: 'index.html',
    },
    plugins: [
      [SassPlugin(), CSSPlugin()],
      CopyPlugin({
        files: ['*.woff2', '*.png', '*.svg', '*.jpg', '*.jpeg', '*.tff'],
        dest: 'assets',
        resolve: 'assets',
      }),
      WebIndexPlugin({
        template: `src/client/resources/pages/index.html`,
        path: './',
      }),
    ],
  }).init();
});
