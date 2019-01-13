import * as React from 'react';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import './styles.scss';

export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar className="appbar profile-appbar" position="relative">
          <Toolbar>
            <IconButton
              style={{ marginLeft: -12, marginRight: 20 }}
              color="inherit"
              aria-label="Menu"
            >
              <div className="appbar-arrow-icon" />
            </IconButton>
            <Typography
              className="appbar-typography"
              variant="h6"
              color="inherit"
            >
              Profile
            </Typography>
          </Toolbar>
          <div className="profile-presentation">
            <div className="profile-presentation-avatar" />
            <Typography
              className="profile-presentation-fullname"
              variant="h4"
              color="inherit"
            >
              Jan Kowalski
            </Typography>
          </div>
        </AppBar>
        <div className="profile-description">
          <Typography variant="body1" color="inherit">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
            eligendi modi quidem eius fugit provident facilis dolores qui et
            natus, ipsa nostrum, quis iure pariatur assumenda cupiditate eaque
            libero?
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}
