import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from '@services/hooks/useTheme';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Layout from '@components/common/Layout';
import Error from '@components/common/Error';
import ToastManager from '@components/ToastManager';
import { ROUTE } from '@constants/route';
import { THEME_MODE } from '@constants/theme';
import GlobalStyles from '@styles/global';
import { lightTheme, darkTheme } from '@styles/theme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === THEME_MODE.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {ROUTE.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <ErrorBoundary fallback={<Error />} isReload>
                  <Suspense fallback={null}>
                    <Layout>
                      <Component />
                    </Layout>
                  </Suspense>
                </ErrorBoundary>
              }
            />
          ))}
        </Routes>
      </Router>
      <ToastManager />
    </ThemeProvider>
  );
}

export default App;
