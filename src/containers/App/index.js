import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Layout
import { theme, GlobalStyles } from '../../theme';
import Header from '../../components/Header';

// Pages
import Playground from '../Playground';
import PeopleList from '../PeopleList';

// TODO: add 404 page
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />

        <Switch>
          <Route exact path='/' component={Playground} />
          <Route path='/people' component={PeopleList} />

          <Route path='*' component={() => <div>404</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
