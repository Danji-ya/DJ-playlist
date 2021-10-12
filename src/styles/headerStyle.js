import styled, { css } from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100vh;
  padding-top: 30px;
  z-index: 100;
  background: ${props => props.theme.header};
  display: flex;
  flex-direction: column;

  transition: background 0.5s linear;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
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
  color: ${({ theme }) => theme.textSecondary};

  // active일 때,
  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.textPrimary};
      background: ${theme.btnPrimary};
    `}

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
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

  > img {
    width: 120px;
    margin-top: 5px;
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
