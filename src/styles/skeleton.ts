import { css, keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
`;

const skeletonElement = css`
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.skeletonBg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.skeletonLoading};
    animation: ${loading} 1.5s infinite;
  }
`;

export default {
  skeletonElement,
  loading,
};
