import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Login from '../Login';
import Home from '../Home';

export default class App extends React.Component {
  private theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: { main: '#ff0000' },
    },
    typography: {
      useNextVariants: true,
    },
  });

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={this.theme}>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
