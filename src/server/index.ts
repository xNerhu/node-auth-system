import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { resolve } from 'path';

import typeDefs from './types';
import resolvers from './resolvers';

dotenv.config();

const app = express();
const PORT = process.env.EXPRESS_PORT;
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(resolve('./build/public')));
app.get('*', (req, res) => {
  return res.sendFile('index.html', { root: 'build/public' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
