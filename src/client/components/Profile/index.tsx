import * as React from 'react';
import { Typography } from '@material-ui/core';

import './styles.scss';

export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile-background-image" />
        <div className="profile-avatar" />
        <Typography className="profile-username" variant="h5" color="inherit">
          Mikołaj Palkiewicz
        </Typography>
        <div className="profile-description">
          <Typography
            className="appbar-typography"
            variant="body1"
            color="inherit"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            nesciunt! Odio sed alias autem blanditiis iure ea soluta quasi
            quibusdam voluptate numquam, incidunt sequi iste quaerat animi
            expedita exercitationem laboriosam.
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}
