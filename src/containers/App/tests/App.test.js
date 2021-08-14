import { render } from '@testing-library/react';

import App from '../';

describe('App', () => {
  it('renders layout', () => {
    const { getByText } = render(<App />);
    expect(getByText('Julie Howard')).toBeInTheDocument();
  });
});
