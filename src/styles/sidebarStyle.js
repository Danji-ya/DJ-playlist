import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;

  /* @media (max-width: 1024px) {
    top: -65px;
    z-index: 9999;
    position: absolute;
  } */
`;

const ToggleContainer = styled.button`
  position: relative;
  border: none;
  background: transparent;
  width: 50px;
  height: 50px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: transform 0.25s ease-in-out;
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translate3d(-50%, -50%, 0)' : 'translate3d(-50%, 100px, 0)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translate3d(-50%, -100px, 0)' : 'translate3d(-50%, -50%, 0)'};
    }

    path {
      fill: ${({ theme }) => theme.navTextPrimary};
    }
  }
`;

export { SidebarContainer, ToggleContainer };
