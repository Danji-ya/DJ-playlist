import { createGlobalStyle } from 'styled-components';
import { SIZE } from '../../constants/device';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    min-width: ${SIZE.MOBILE};
    min-height: 100vh;
  }
  
  body {
    color: ${({ theme }) => theme.converseColor};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    user-select: none;
  }
`;

export default GlobalStyles;
