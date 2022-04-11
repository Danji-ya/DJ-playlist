import ToggleModeContainer from '../../containers/ToggleModeContainer';
import * as Styled from '../../styles/sidebar';

function Sidebar() {
  return (
    <Styled.SidebarContainer>
      <ToggleModeContainer />
    </Styled.SidebarContainer>
  );
}

export default Sidebar;
