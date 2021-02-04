import { cleanup, render, waitFor } from 'utils/test-utils';
import { Route } from 'react-router-dom';

import MemberForm from '../';

describe('People/Form', () => {
  afterEach(cleanup);

  it('renders correctly - new user', () => {
    const { container, getByRole } = render(<MemberForm />);

    expect(container.querySelector('h1 + p')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeInTheDocument();

    expect(getByRole('button', { name: /Cancel/i })).toBeDefined();
    expect(
      container.querySelector('button[type="submit"]')
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('with id param - edit user', async () => {
    const { container } = render(
      <Route exact path='/people/edit/:id' component={MemberForm} />,
      {
        route: '/people/edit/1',
      }
    );

    expect(container.querySelector('h1').innerHTML).toBe('Edit team member');
    // TODO: Redo it to normal checking
    await waitFor(
      () =>
        expect(
          container.querySelector('button[type="submit"]')
        ).toHaveTextContent('Save'),
      { container, timeout: 5000 }
    );
  });
});
