import styled from 'styled-components';

import { shadows, centerImage, robotoMedium } from '@client/mixins';

export const Root = styled.div`
  width: 194px;
  min-height: 194px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: ${shadows(3)};
`;

export const Avatar = styled.div`
  width: 196px;
  height: 196px;
  background-color: #eee;
  ${centerImage('100%', '100%')};
`;

export const Name = styled.div`
  font-size: 16px;
  padding: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${robotoMedium()};
`;
