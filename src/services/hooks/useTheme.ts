import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@store/themeState';
import { THEME_MODE } from '@constants/theme';

const preferDarkQuery = '(prefers-color-scheme: dark)';

const useTheme = () => {
  const [themes, setThemes] = useRecoilState(themeState);

  const theme = (() => {
    if (themes.userTheme !== THEME_MODE.DEFAULT) return themes.userTheme;

    if (themes.systemTheme === THEME_MODE.NO_PREFERENCE)
      return THEME_MODE.LIGHT;
    return themes.systemTheme;
  })();

  const handleUserTheme = () => {
    const nextUserTheme =
      themes.userTheme === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK;

    setThemes((lp) => {
      return { ...lp, userTheme: nextUserTheme };
    });
  };

  useEffect(() => {
    const matcher = window.matchMedia(preferDarkQuery);
    const systemPrefersDark = matcher.matches;

    const onChangePreferColorScheme = (event: MediaQueryListEvent) => {
      const { matches } = event;

      setThemes((prevThemes) => {
        return {
          ...prevThemes,
          systemTheme: matches ? THEME_MODE.DARK : THEME_MODE.LIGHT,
        };
      });
    };

    matcher.addEventListener('change', onChangePreferColorScheme);

    setThemes((prevThemes) => {
      return {
        ...prevThemes,
        systemTheme: systemPrefersDark ? THEME_MODE.DARK : THEME_MODE.LIGHT,
      };
    });

    return () => {
      matcher.removeEventListener('change', onChangePreferColorScheme);
    };
  }, [setThemes]);

  return {
    theme,
    setTheme: handleUserTheme,
  };
};

export default useTheme;
