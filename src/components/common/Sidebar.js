import React from 'react';
import ToggleModeContainer from '../../containers/ToggleModeContainer';
import { SidebarContainer } from '../../styles/sidebarStyle';

function Sidebar() {
  return (
    <SidebarContainer>
      <ToggleModeContainer />
    </SidebarContainer>
  );
}

export default Sidebar;
