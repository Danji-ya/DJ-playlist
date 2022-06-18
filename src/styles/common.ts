import styled, { css } from 'styled-components';

const a11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
  white-space: nowrap;
`;

const H1A11Y = styled.h1`
  ${a11y}
`;

export { a11y, H1A11Y };
