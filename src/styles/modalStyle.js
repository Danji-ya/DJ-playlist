import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(120%);
  }
  100% {
    transform: none;
  }
`;

const slideDown = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translateY(120%);
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: white;
  border-radius: 25px;
  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  position: relative;
  ${({ modalState }) =>
    !modalState &&
    css`
      animation-name: ${slideDown};
    `};

  color: black;
`;

const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(133, 133, 133, 0.1);
    cursor: pointer;
  }
`;

export { ModalBackground, ModalContainer, CloseBtn };
