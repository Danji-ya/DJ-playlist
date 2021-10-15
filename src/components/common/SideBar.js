import React from 'react';
import styled from 'styled-components';
import ToggleModeContainer from '../../containers/ToggleModeContainer';
import AccountContainer from '../../containers/AccountContainer';

const SideBarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1vh 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background: red; */
`;

function SideBar() {
  return (
    <SideBarContainer>
      <ToggleModeContainer />
      <AccountContainer />
    </SideBarContainer>
  );
}

export default SideBar;
