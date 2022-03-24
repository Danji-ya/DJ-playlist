import styled from 'styled-components';
import { DEVICE } from '../constants/device';

const SidebarContainer = styled.div`
  position: absolute;
  right: 15px;
  margin-bottom: 50px;

  @media ${DEVICE.MOBILE} {
    right: 5px;
  }
`;

const ToggleContainer = styled.button<{ lightTheme: boolean }>`
  position: relative;
  border: none;
  background: transparent;
  width: 45px;
  height: 45px;
  border-radius: 50%;
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
        lightTheme
          ? 'translate3d(-50%, -50%, 0)'
          : 'translate3d(-50%, 100px, 0)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme
          ? 'translate3d(-50%, -100px, 0)'
          : 'translate3d(-50%, -50%, 0)'};
    }

    path {
      fill: ${({ theme }) => theme.navTextPrimary};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.navBtn};
  }
`;

export { SidebarContainer, ToggleContainer };
