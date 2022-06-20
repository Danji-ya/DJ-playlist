import { createGlobalStyle } from 'styled-components';
import { SIZE } from '../constants/device';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'BMHANNAPro';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/woowahan/BMHannaPro.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    min-width: ${SIZE.MIN_MOBILE};
  }
  
  body {
    color: ${({ theme }) => theme.converseColor};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    user-select: none;
  }

  button {
    border: none;
    padding: 0;
  }
`;

export default GlobalStyles;
