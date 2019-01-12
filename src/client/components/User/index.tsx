import * as React from 'react';

import { Root, Avatar, Name } from './styles';

export default class User extends React.Component {
  render() {
    return (
      <Root>
        <Avatar />
        <Name>Jan Kowalski</Name>
      </Root>
    );
  }
}
