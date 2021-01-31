import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

// Layout
import { theme, GlobalStyles } from 'theme';
import Header from 'components/Header';

// Pages
import Playground from 'containers/Playground';
import PeopleList from 'containers/PeopleList';

// Store
import store from 'redux/store';

// TODO: add 404 page
export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
