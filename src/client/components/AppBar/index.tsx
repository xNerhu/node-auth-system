import * as React from 'react';

import { Root, Title, ActionItems, ActionItem } from './styles';

export default class AppBar extends React.Component {
  render() {
    return (
      <Root>
        <Title>Title</Title>
        <ActionItems>
          <ActionItem>Sign up</ActionItem>
          <ActionItem>Log in</ActionItem>
        </ActionItems>
      </Root>
    );
  }
}
