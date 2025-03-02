import Gnb from '@components/Gnb';
import icons from '@constants/icons';
import { H1A11Y } from '@styles/common';
import Styled from './Header.style';

function Header() {
  return (
    <Styled.Container>
      <H1A11Y>DJ playlist</H1A11Y>

      <Styled.LogoLink to="/">
        <Styled.LogoImgWrapper>
          <icons.Logo height={45} width={45} />
        </Styled.LogoImgWrapper>
        <Styled.LogoText>DJ playlist</Styled.LogoText>
      </Styled.LogoLink>

      <Gnb />
    </Styled.Container>
  );
}

export default Header;
