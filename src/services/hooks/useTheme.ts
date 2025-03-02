import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@store/themeState';

const preferDarkQuery = '(prefers-color-scheme: dark)';

const useTheme = () => {
  const [themes, setThemes] = useRecoilState(themeState);

  const theme = (() => {
    if (themes.userTheme !== 'default') return themes.userTheme;

    if (themes.systemTheme === 'no-preference') return 'light';
    return themes.systemTheme;
  })();

  const handleUserTheme = () => {
    const nextUserTheme = themes.userTheme === 'dark' ? 'light' : 'dark';

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
        return { ...prevThemes, systemTheme: matches ? 'dark' : 'light' };
      });
    };

    matcher.addEventListener('change', onChangePreferColorScheme);

    setThemes((prevThemes) => {
      return {
        ...prevThemes,
        systemTheme: systemPrefersDark ? 'dark' : 'light',
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
