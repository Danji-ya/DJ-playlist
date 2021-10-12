import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PlayerContainer from './containers/PlayerContainer';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import GlobalStyles from './styles/common/globalStyle';
import { darkTheme, lightTheme } from './styles/common/theme';

function App() {
  const mode = useSelector(state => state.common.mode);

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
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
