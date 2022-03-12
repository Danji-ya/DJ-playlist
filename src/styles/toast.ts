import styled, { css, keyframes } from 'styled-components';

const toastProgress = keyframes`
  to {
    width: 0;
  }
`;

const toastContainer = keyframes`
  0% {
    opacity: 0.9;
  }
  20% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  width: 280px;
  z-index: 99999;
`;

const infoToastStyle = css`
  background-color: #084298;
  color: white;
`;

const successToastStyle = css`
  background-color: #61c23a;
  color: white;
`;

const errorToastStyle = css`
  background-color: #da4347;
  color: white;
`;

const ToastWrapper = styled.div<{
  type: 'success' | 'error' | 'info';
  duration: number;
}>`
  position: relative;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: all 1s;
  transform: translateY(15%);
  overflow: hidden;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  ${({ type }) => {
    const style = {
      success: successToastStyle,
      error: errorToastStyle,
      info: infoToastStyle,
    };
    return style[type];
  }}

  ${({ duration }) => css`
    animation: ${toastContainer} ease-in-out ${duration / 1000}s;
  `};
`;

const Body = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg path {
    fill: white;

    :hover {
      cursor: pointer;
    }
  }
`;

const Contents = styled.div`
  flex: 1;
  padding-right: 5px;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 2px;
`;

const Message = styled.p`
  font-size: 0.8rem;
`;

const Progress = styled.div<{
  duration: number;
}>`
  width: 100%;
  height: 4px;
  background-color: white;

  ${({ duration }) => css`
    animation: ${toastProgress} linear ${duration / 1000}s;
  `};
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:hover {
    cursor: pointer;
    path {
      fill: #757575;
    }
  }
`;

export {
  Container,
  ToastWrapper,
  Body,
  Contents,
  Title,
  Message,
  Progress,
  CloseBtn,
};
