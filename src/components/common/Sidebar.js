import React from 'react';
import ToggleModeContainer from '../../containers/ToggleModeContainer';
import AccountContainer from '../../containers/AccountContainer';
import { SidebarContainer } from '../../styles/sidebarStyle';

function Sidebar() {
  return (
    <SidebarContainer>
      <ToggleModeContainer />
      {/* <AccountContainer /> */}
    </SidebarContainer>
  );
}

export default Sidebar;
