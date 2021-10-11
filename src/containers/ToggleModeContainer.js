import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleMode from '../components/common/ToggleMode';
import { setMode } from '../store/modules/common';

function ToggleModeContainer() {
  const mode = useSelector(state => state.common.mode);

  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(setMode());
  };

  return <ToggleMode mode={mode} toggleMode={toggleMode} />;
}

export default ToggleModeContainer;
