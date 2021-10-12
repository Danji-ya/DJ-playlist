import React from 'react';
import { images } from '../../constatns';
import NavbarContainer from '../../containers/NavbarContainer';
import { HeaderContainer, LogoWrapper, LogoImgWrapper } from '../../styles/headerStyle';

function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoImgWrapper>
          <img src={images.logo.default} alt="" />
        </LogoImgWrapper>
        <img src={images.logoText.default} alt="" />
      </LogoWrapper>

      <NavbarContainer />
    </HeaderContainer>
  );
}

export default Header;
