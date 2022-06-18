import { icons } from '../../constants';
import GnbContainer from '../../containers/GnbContainer';
import { H1A11Y } from '../../styles/common';
import Styled from './Header.style';

interface Props {
  handlePath: (url: string) => void;
}

function Header({ handlePath }: Props) {
  return (
    <Styled.Container>
      <H1A11Y>DJ playlist</H1A11Y>
      <Styled.LogoWrapper onClick={() => handlePath('/')} aria-label="home">
        <Styled.LogoImgWrapper>
          <icons.Logo height={45} width={45} />
        </Styled.LogoImgWrapper>
        <Styled.LogoText>DJ playlist</Styled.LogoText>
      </Styled.LogoWrapper>

      <GnbContainer />
    </Styled.Container>
  );
}

export default Header;
