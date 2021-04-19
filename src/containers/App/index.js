import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'theme';

// Layout
import Header from 'components/Header';

// Pages
import Playground from 'containers/Playground';
import PeopleList from 'containers/People/List';
import MemberForm from 'containers/People/Unit';

// Store
import store from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <GlobalStyles />
          <Header />

          <Switch>
            <Route exact path='/' component={PeopleList} />
            <Route exact path='/people' component={PeopleList} />
            <Route exact path='/people/add' component={MemberForm} />
            <Route exact path='/people/edit/:id' component={MemberForm} />
            <Route exact path='/playground' component={Playground} />

            {/* TODO: add 404 page */}
            <Route path='*' component={() => <div>404</div>} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
