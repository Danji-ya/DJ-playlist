import React from 'react';
import { icons } from '../../constatns';
import ToggleContainer from '../../styles/toggleModeStyle';

function ToggleMode({ mode, toggleMode }) {
  return (
    <ToggleContainer lightTheme={mode} onClick={toggleMode}>
      <img src={icons.sun.default} alt="sun-Icon" />
      <img src={icons.moon.default} alt="moon-Icon" />
    </ToggleContainer>
  );
}

export default ToggleMode;
