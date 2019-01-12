import * as React from 'react';

import { Root, Img, Name } from './styles';

export default class User extends React.Component {
  render() {
    return (
      <Root>
        <Img />
        <Name>Jan Kowalski</Name>
      </Root>
    );
  }
}
