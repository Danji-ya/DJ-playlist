import styled, { css } from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 20vw;
  z-index: 100;
  background: ${props => props.theme.header};
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background 0.5s linear;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(165, 165, 165, 0.2);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavWrapper = styled.nav``;

const NavList = styled.ol`
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 5px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ active, theme }) => (active ? theme.btnPrimary : theme.btnSecondary)};

  ${props =>
    !props.active &&
    css`
      &:hover {
        /* opacity: 0.3; */
        background: ${({ theme }) => theme.btnPrimary};
      }
    `}

  &:hover {
    cursor: pointer;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Icon = styled.img.attrs(props => ({
  src: props.src,
  alt: '',
}))`
  width: 15px;
  height: 15px;
  object-fit: cover;
`;

export { HeaderContainer, LogoWrapper, NavWrapper, NavList, NavItem, Icon };
