import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@components/common/ErrorBoundary';
import Layout from '@components/common/Layout';
import Error from '@components/Error';
import { ROUTE } from '@constants/route';
import ToastContainer from '@containers/ToastContainer';
import useTheme from '@services/hooks/useTheme';
import GlobalStyles from '@styles/global';
import { lightTheme, darkTheme } from '@styles/theme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {ROUTE.map(({ path, Component, auth }) => (
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
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
