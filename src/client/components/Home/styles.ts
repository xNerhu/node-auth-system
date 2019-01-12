import styled, { css } from 'styled-components';

const MAX_COLUMNS = 4;
const CARD_WIDTH = 194;
const PADDING = 48;

const createMedia = () => {
  const list = [];

  for (let i = 2; i <= MAX_COLUMNS; i++) {
    list.push(`
      @media (min-width: ${CARD_WIDTH * i + PADDING * 2}px) {
        grid-template-columns: repeat(${i}, 1fr);
      }
    `);
  }

  return css`
    ${list}
  `;
};

export const Root = styled.div`
  width: fit-content;
  margin: 48px auto;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(1, 1fr);
  ${createMedia()};
`;
