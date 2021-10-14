import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    color: ${({ theme }) => theme.converseColor};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5E5E5E;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bodySecondary};
  }
  }
`;

export default GlobalStyles;
