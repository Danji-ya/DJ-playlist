import ToggleThemeMode from '@components/ToggleThemeMode';
import useTheme from '@services/hooks/useTheme';

function ToggleThemeModeContainer() {
  const { theme, setTheme } = useTheme();

  return <ToggleThemeMode mode={theme} toggleThemeMode={setTheme} />;
}

export default ToggleThemeModeContainer;
