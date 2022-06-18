import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/common/ErrorBoundary';
import Layout from './components/common/Layout';
import Error from './components/Error';
import { ROUTE } from './constants/route';
import ToastContainer from './containers/ToastContainer';
import { themeState } from './store/themeState';
import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const theme = useRecoilValue<boolean>(themeState);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
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
