import { render, screen } from '@testing-library/react';
import App from '../';

describe('App', () => {
  it('renders playground', () => {
    const { getByText } = render(<App />);
    expect(getByText('Add member')).toBeInTheDocument();
  });
});
