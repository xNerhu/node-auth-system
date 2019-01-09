import * as React from 'react';
import { render as RenderDOM } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.scss';

import App from './components/App';

const render = (AppComponent: any) => {
  RenderDOM(
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

// react-hot-loader
if ((module as any).hot) {
  (module as any).hot.accept();
}
