import styled, { css } from 'styled-components';

const a11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  white-space: nowrap;
`;

const H1A11Y = styled.h1`
  ${a11y}
`;

const H2A11Y = styled.h2`
  ${a11y}
`;

const H3A11Y = styled.h3`
  ${a11y}
`;

export { a11y, H1A11Y, H2A11Y, H3A11Y };
