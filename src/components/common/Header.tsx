import NavbarContainer from '../../containers/NavbarContainer';
import {
  HeaderContainer,
  LogoWrapper,
  LogoImgWrapper,
  LogoText,
} from '../../styles/header';

import Logo from '../../assets/icons/logo.svg';

interface Props {
  handlePath: (url: string) => void;
}

function Header({ handlePath }: Props) {
  return (
    <HeaderContainer>
      <LogoWrapper onClick={() => handlePath('/')}>
        <LogoImgWrapper>
          <Logo height={45} width={45} />
        </LogoImgWrapper>
        <LogoText>DJ playlist</LogoText>
      </LogoWrapper>

      <NavbarContainer />
    </HeaderContainer>
  );
}

export default Header;
