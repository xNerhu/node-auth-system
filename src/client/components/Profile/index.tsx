import * as React from 'react';

import AppBar from '../AppBar';
import './styles.scss';

export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar title="My profile" />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum a aliquam
        id est ipsa optio ratione, voluptate placeat possimus, eius autem aut
        corporis alias sint recusandae in dolore, tempore quis!
      </React.Fragment>
    );
  }
}
