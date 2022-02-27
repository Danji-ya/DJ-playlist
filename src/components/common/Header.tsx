import { images } from '../../constants';
import NavbarContainer from '../../containers/NavbarContainer';
import {
  HeaderContainer,
  LogoWrapper,
  LogoImgWrapper,
} from '../../styles/header';

interface Props {
  handlePath: (url: string) => void;
}

function Header({ handlePath }: Props) {
  return (
    <HeaderContainer>
      <LogoWrapper onClick={() => handlePath('/')}>
        <LogoImgWrapper>
          <img src={images.logo} alt="" />
        </LogoImgWrapper>
        <p> DJ playlist </p>
      </LogoWrapper>

      <NavbarContainer />
    </HeaderContainer>
  );
}

export default Header;
