import * as React from 'react';

import User from '../User';
import AppBar from '../AppBar';
import './styles.scss';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <div className="home">
          <User />
          <User />
          <User />
          <User />
        </div>
      </React.Fragment>
    );
  }
}
