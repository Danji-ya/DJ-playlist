import { useRecoilState } from 'recoil';
import ToggleMode from '../components/ToggleMode';
import { themeState } from '../store/themeState';

function ToggleModeContainer() {
  const [theme, setTheme] = useRecoilState<boolean>(themeState);

  const toggleMode = () => setTheme((prevTheme) => !prevTheme);

  return <ToggleMode mode={theme} toggleMode={toggleMode} />;
}

export default ToggleModeContainer;
