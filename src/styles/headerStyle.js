import styled, { css } from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100vh;
  padding-top: 30px;
  z-index: 100;
  background: ${({ theme }) => theme.header};
  border-right: ${({ theme }) => `1px solid ${theme.border}`};
  display: flex;
  flex-direction: column;

  transition: background 0.5s linear;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

const LogoImgWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: white;
  position: relative;
  margin-left: 10%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavWrapper = styled.nav`
  padding: 15% 0;
`;

const NavList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.li`
  width: 90%;
  height: 35px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.navTextSecondary};

  // active일 때,
  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.navTextPrimary};
      background: ${theme.navBtn};
    `}

  &:hover {
    color: ${({ theme }) => theme.navTextPrimary};
    cursor: pointer;
  }
  margin: 3px 0;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  margin: 0 5%;
`;

const Icon = styled.img.attrs(props => ({
  src: props.src,
  alt: '',
}))`
  margin: 1% 10%;
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    font-family: 'BMHANNAPro', sans-serif;
    font-size: 1.5rem;
    margin-left: 15px;
  }
`;

export {
  HeaderContainer,
  LogoWrapper,
  LogoImgWrapper,
  NavWrapper,
  NavList,
  NavItem,
  IconWrapper,
  Icon,
};
