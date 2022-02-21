import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import '../../assets/fonts/font.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
    color: ${({ theme }) => theme.converseColor};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
  }
`;

export default GlobalStyles;
