import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import './styles.scss';

export default class UserCard extends React.Component {
  render() {
    return (
      <Card className="usercard">
        <CardActionArea>
          <CardMedia
            className="usercard-media"
            image="https://avatars3.githubusercontent.com/u/12050791?s=460&v=4"
          />
          <CardContent>
            <Typography className="usercard-name" variant="subtitle1">
              Jan Kowalski
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
