import styled from 'styled-components';

import { shadows } from '@client/mixins';

export const Root = styled.div`
  width: 100%;
  height: 64px;
  background-color: #fff;
  display: flex;
  align-items: center;
  user-select: none;
  box-shadow: ${shadows(3)};
`;

export const Title = styled.div`
  margin-left: 24px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.89);
`;

export const ActionItems = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 24px;
`;

export const ActionItem = styled.div`
  height: 100%;
  font-size: 20px;
  padding: 0px 12px;
  line-height: 64px;
  color: rgba(0, 0, 0, 0.89);
  cursor: pointer;
  transition: 0.2s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
