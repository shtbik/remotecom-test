import { cleanup, render } from 'utils/test-utils';

import { numberWithSpaces, getCurrencySymbol } from 'utils/amount';
import data from 'server/db.base.json';

import Table from '../List/Table';
import { TABLE_BODY_HEIGHT } from '../List';

const COUNT_OF_COLUMNS = 5;
const { people } = data;

describe('People/List/Table', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(<Table />);

    expect(container.querySelector('table')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('loading', () => {
    const { container } = render(<Table loading />);

    expect(container.querySelectorAll('table tbody tr td').length).toBe(1);
    expect(
      container.querySelector('table tbody tr td svg')
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('error', () => {
    const { container } = render(<Table error />);

    expect(container.querySelectorAll('table tbody tr td').length).toBe(1);
    expect(
      container.querySelector('table tbody tr td svg')
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('with no data', () => {
    const { getByText } = render(<Table people={[]} />);

    expect(getByText('There is no data')).toBeInTheDocument();
  });

  it('count of rows/cols/cells', () => {
    const { container } = render(<Table people={people} />);

    expect(container.querySelectorAll('table thead tr th').length).toBe(
      COUNT_OF_COLUMNS
    );
    expect(container.querySelectorAll('table tbody tr').length).toBe(
      people.length
    );
    expect(container.querySelectorAll('table tbody tr td').length).toBe(
      people.length * COUNT_OF_COLUMNS
    );

    expect(container).toMatchSnapshot();
  });

  it('check content inside', () => {
    const { container } = render(<Table people={people} />);
    const member = { ...people[0] };
    member.salary = `${getCurrencySymbol(member.currency)} ${
      member.currency
    } ${numberWithSpaces(member.salary.toFixed(2))}`;
    delete member.id;
    delete member.currency;
    delete member.employment;

    const keys = Object.keys(member);

    const cells = container.querySelectorAll('table tbody > tr td');

    for (let i = 0; i < keys.length; i++) {
      expect(cells[i].innerHTML).toBe(member[keys[i]]);
    }
  });

  it('tBodyHeight', () => {
    const { container } = render(
      <Table people={people} tBodyHeight={TABLE_BODY_HEIGHT} />
    );

    const style = window.getComputedStyle(
      container.querySelector('table tbody')
    );

    expect(style.height).toBe(`${TABLE_BODY_HEIGHT}px`);
  });
});
