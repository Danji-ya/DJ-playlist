import styled, { css } from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100vh;
  padding-top: 30px;
  z-index: 50;
  background: ${({ theme }) => theme.header};
  border-right: ${({ theme }) => `1px solid ${theme.border}`};
  display: flex;
  flex-direction: column;

  transition: background 0.5s linear;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    padding-top: 0px;
    padding: 0 50px;

    border-bottom: ${({ theme }) => `1px solid ${theme.border}`};
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 70%;
  p {
    font-weight: bold;
    font-family: 'BMHANNAPro', sans-serif;
    font-size: 1.5rem;
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 480px) {
    p {
      display: none;
    }
  }
`;

const LogoImgWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: white;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavWrapper = styled.nav`
  padding: 15% 0;

  @media (max-width: 1024px) {
    padding: 0 0;
  }
`;

const NavList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
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

  @media (max-width: 1024px) {
    justify-content: center;
    margin: 0 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    p {
      display: none;
    }
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
