import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppBar from '../AppBar';
import Home from '../Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AppBar />
          <Route path="/" component={Home} exact />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
