import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'theme';

import Header from 'components/Header';

import store from 'redux/store';

const AllTheProviders = ({ route }) => ({ children }) => {
  const history = createMemoryHistory({ initialEntries: [route] });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStyles />
          <Header />

          {children}
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, { route = '/', ...options } = {}) => {
  return render(ui, { wrapper: AllTheProviders({ route }), ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
