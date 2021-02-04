import { cleanup, render } from 'utils/test-utils';
import PeopleList from '../';

describe('People/List', () => {
  afterEach(cleanup);

  it('common render', () => {
    const { container, getByText } = render(<PeopleList />);

    expect(container.querySelector('h1').innerHTML).toBe('People');
    expect(getByText('Add member')).toBeInTheDocument();
    expect(container.querySelector('input[type="search"]')).toBeInTheDocument();
    expect(container.querySelector('table thead')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
