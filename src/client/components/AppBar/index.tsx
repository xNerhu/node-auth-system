import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import './styles.scss';

export interface Props {
  title: string;
}

export default class Bar extends React.Component<Props> {
  render() {
    const { title, children } = this.props;

    return (
      <AppBar className="appbar" position="relative" color="inherit">
        <Toolbar>
          <Typography
            className="appbar-typography"
            variant="h6"
            color="inherit"
          >
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    );
  }
}
