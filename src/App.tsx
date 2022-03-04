import { Router, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Error from './components/common/Error';
import ErrorBoundary from './components/common/ErrorBoundary';
import PlayerContainer from './containers/PlayerContainer';
import ToastContainer from './containers/ToastContainer';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import { themeState } from './store/themeState';
import GlobalStyles from './styles/common/global';
import { darkTheme, lightTheme } from './styles/common/theme';
import history from './utils/history';

function App() {
  const theme = useRecoilValue<boolean>(themeState);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ErrorBoundary fallback={<Error history={history} />}>
        <Router history={history}>
          <Switch>
            <Route exact path={['/', '/main']} component={MainPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Route
            exact
            path={['/', '/main', '/search']}
            component={PlayerContainer}
          />
        </Router>
      </ErrorBoundary>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
