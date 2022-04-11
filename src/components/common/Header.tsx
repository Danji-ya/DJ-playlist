import { icons } from '../../constants';
import NavbarContainer from '../../containers/NavbarContainer';
import * as Styled from '../../styles/header';

interface Props {
  handlePath: (url: string) => void;
}

function Header({ handlePath }: Props) {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoWrapper onClick={() => handlePath('/')} aria-label="home">
        <Styled.LogoImgWrapper>
          <icons.Logo height={45} width={45} />
        </Styled.LogoImgWrapper>
        <Styled.LogoText>DJ playlist</Styled.LogoText>
      </Styled.LogoWrapper>

      <NavbarContainer />
    </Styled.HeaderContainer>
  );
}

export default Header;
