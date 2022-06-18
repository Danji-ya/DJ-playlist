import ToggleModeContainer from '../../containers/ToggleModeContainer';
import { H2A11Y } from '../../styles/common';
import Styled from './Sidebar.style';

function Sidebar() {
  return (
    <Styled.Container>
      <H2A11Y>편의기능</H2A11Y>
      <ToggleModeContainer />
    </Styled.Container>
  );
}

export default Sidebar;
