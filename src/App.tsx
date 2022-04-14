import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/common/ErrorBoundary';
import { PATH } from './constants/path';
import { ROUTE } from './constants/route';
import PlayerContainer from './containers/PlayerContainer';
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
                <ErrorBoundary>
                  <Suspense fallback={null}>
                    <Component />
                    {path !== PATH.NOT_FOUND && <PlayerContainer />}
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
