import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'theme';

import Header from 'components/Header';

import store from 'redux/store';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Header />

          {children}
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
