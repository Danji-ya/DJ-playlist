import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PlayerContainer from './containers/PlayerContainer';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import { useAppSelector } from './store';
import GlobalStyles from './styles/common/global';
import { darkTheme, lightTheme } from './styles/common/theme';
import history from './utils/history';

function App() {
  const mode = useAppSelector((state) => state.common.mode);

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route exact path={['/', '/main']} component={MainPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
      <PlayerContainer />
    </ThemeProvider>
  );
}

export default App;
