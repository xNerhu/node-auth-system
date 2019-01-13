import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { colors } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Profile from '../Profile';
import Home from '../Home';

export default class App extends React.Component {
  private theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: { main: colors.indigo['500'] },
      secondary: { main: colors.amber['500'] },
    },
    typography: {
      useNextVariants: true,
    },
  });

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={this.theme}>
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} exact />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
