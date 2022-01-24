import React from 'react';
import { icons } from '../../constants';
import { ToggleContainer } from '../../styles/sidebarStyle';

function ToggleMode({ mode, toggleMode }) {
  return (
    <ToggleContainer lightTheme={mode} onClick={toggleMode}>
      <img src={icons.sun} alt="sun-Icon" />
      <img src={icons.moon} alt="moon-Icon" />
    </ToggleContainer>
  );
}

export default ToggleMode;
