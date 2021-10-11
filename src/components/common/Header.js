import React from 'react';
import { images } from '../../constatns';
import NavbarContainer from '../../containers/NavbarContainer';
import { HeaderContainer, LogoWrapper } from '../../styles/headerStyle';

function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={images.logo2.default} alt="" />
      </LogoWrapper>
      <NavbarContainer />
    </HeaderContainer>
  );
}

export default Header;
