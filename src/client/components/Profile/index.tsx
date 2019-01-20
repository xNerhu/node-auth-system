import * as React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

import './styles.scss';

export default class Profile extends React.Component {
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
              Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="profile-background-image" />
        <div className="profile-container">
          <div className="profile-avatar" />
          <Typography className="profile-username" variant="h5" color="inherit">
            Mikołaj Palkiewicz
          </Typography>
          <div className="profile-description">
            <Typography variant="body1" color="inherit">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
              nesciunt! Odio sed alias autem blanditiis iure ea soluta quasi
              quibusdam voluptate numquam, incidunt sequi iste quaerat animi
              expedita exercitationem laboriosam.
            </Typography>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
