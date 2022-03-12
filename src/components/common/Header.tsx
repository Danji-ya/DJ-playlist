import { icons } from '../../constants';
import NavbarContainer from '../../containers/NavbarContainer';
import {
  HeaderContainer,
  LogoWrapper,
  LogoImgWrapper,
  LogoText,
} from '../../styles/header';

interface Props {
  handlePath: (url: string) => void;
}

function Header({ handlePath }: Props) {
  return (
    <HeaderContainer>
      <LogoWrapper onClick={() => handlePath('/')} aria-label="home">
        <LogoImgWrapper>
          <icons.Logo height={45} width={45} />
        </LogoImgWrapper>
        <LogoText>DJ playlist</LogoText>
      </LogoWrapper>

      <NavbarContainer />
    </HeaderContainer>
  );
}

export default Header;
