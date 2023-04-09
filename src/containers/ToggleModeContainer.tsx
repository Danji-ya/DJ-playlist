import ToggleMode from '../components/ToggleMode';
import useTheme from '../services/hooks/useTheme';

function ToggleModeContainer() {
  const { theme, setTheme } = useTheme();

  return <ToggleMode mode={theme} toggleMode={setTheme} />;
}

export default ToggleModeContainer;
