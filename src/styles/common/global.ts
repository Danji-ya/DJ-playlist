import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  body {
    color: ${({ theme }) => theme.converseColor};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    user-select: none;
  }
`;

export default GlobalStyles;
