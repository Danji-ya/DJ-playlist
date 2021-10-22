import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1.5vh 0;
`;

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  position: relative;
  width: 3.7rem;
  height: 1.8rem;
  border-radius: 30px;
  border: none;
  padding: 0.1rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  display: flex;
  justify-content: space-between;
  img {
    max-width: 1.6rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export { SidebarContainer, ToggleContainer };
