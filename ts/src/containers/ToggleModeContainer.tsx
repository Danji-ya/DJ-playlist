import ToggleMode from '../components/common/ToggleMode';
import { useAppDispatch, useAppSelector } from '../store';
import { setMode } from '../store/modules/common';

function ToggleModeContainer() {
  const mode = useAppSelector((state) => state.common.mode);
  const dispatch = useAppDispatch();

  const toggleMode = () => dispatch(setMode());

  return <ToggleMode mode={mode} toggleMode={toggleMode} />;
}

export default ToggleModeContainer;
