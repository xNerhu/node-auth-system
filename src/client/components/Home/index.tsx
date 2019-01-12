import * as React from 'react';

import User from '../User';
import { Root, Container } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <Root>
        <Container>
          <User />
        </Container>
      </Root>
    );
  }
}
