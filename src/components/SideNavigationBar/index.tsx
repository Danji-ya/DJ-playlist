import ToggleThemeModeContainer from '@containers/ToggleThemeModeContainer';
import { H2A11Y } from '@styles/common';
import Styled from './SideNavigationBar.style';

function SideNavigationBar() {
  return (
    <Styled.Container>
      <H2A11Y>편의기능</H2A11Y>
      <ToggleThemeModeContainer />
    </Styled.Container>
  );
}

export default SideNavigationBar;
