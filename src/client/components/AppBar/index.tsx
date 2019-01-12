import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './styles.scss';

export default class Bar extends React.Component {
  render() {
    return (
      <AppBar className="appbar" position="relative" color="inherit">
        <Toolbar>
          <Typography
            className="appbar-typography"
            variant="h6"
            color="inherit"
          >
            Photos
          </Typography>
          <Button>login</Button>
          <Button>sign up</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
