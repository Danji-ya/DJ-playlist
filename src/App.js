import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import PlaylistPage from './pages/PlaylistPage';
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
          <Route path="/playlist" component={PlaylistPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
