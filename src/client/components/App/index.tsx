import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppBar from '../AppBar';
import Home from '../Home';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <BrowserRouter>
          <Route path="/" component={Home} exact />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
