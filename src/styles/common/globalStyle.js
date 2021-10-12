import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    color: ${({ theme }) => theme.converseColor};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
  }
`;

export default GlobalStyles;
