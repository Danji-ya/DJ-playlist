import React from 'react';
import { images } from '../../constants';
import NavbarContainer from '../../containers/NavbarContainer';
import { HeaderContainer, LogoWrapper, LogoImgWrapper } from '../../styles/headerStyle';

function Header({ handlePath }) {
  return (
    <HeaderContainer>
      <LogoWrapper onClick={() => handlePath('/')}>
        <LogoImgWrapper>
          <img src={images.logo.default} alt="" />
        </LogoImgWrapper>
        <p> DJ playlist </p>
      </LogoWrapper>

      <NavbarContainer />
    </HeaderContainer>
  );
}

export default Header;
