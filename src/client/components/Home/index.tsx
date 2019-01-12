import * as React from 'react';

import User from '../User';
import { Root } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <Root>
        <User />
        <User />
        <User />
        <User />
      </Root>
    );
  }
}
