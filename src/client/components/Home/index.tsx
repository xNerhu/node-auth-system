import * as React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import UserCard from '../UserCard';
import './styles.scss';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar className="appbar" position="relative">
          <Toolbar>
            <Typography
              className="appbar-typography"
              variant="h6"
              color="inherit"
            >
              Discover new people
            </Typography>
            <Button color="inherit">sign up</Button>
            <Button color="inherit">log in</Button>
          </Toolbar>
        </AppBar>
        <div className="home-container">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </React.Fragment>
    );
  }
}
