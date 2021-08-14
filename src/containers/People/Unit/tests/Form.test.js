import { cleanup, render, fireEvent } from 'utils/test-utils';

import data from 'server/db.base.json';

import Form from '../Form';

const defaultRequiredProps = {
  member: {},
  loading: false,
  error: false,
  handleChangeMember: () => {},
};

describe('People/Form', () => {
  afterEach(cleanup);

  it('renders correctly - new user', () => {
    const { container } = render(<Form {...defaultRequiredProps} />);

    expect(container.querySelector('form#userForm')).toBeInTheDocument();
    expect(container.querySelector('input[name="name"]')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('loading state', () => {
    const { container } = render(
      <Form {...defaultRequiredProps} loading={true} />
    );

    expect(container.querySelector('svg')).toBeDefined();
    expect(container.querySelectorAll('input').length).toBe(0);

    expect(container).toMatchSnapshot();
  });

  it('error state', () => {
    const { container, getByText } = render(
      <Form {...defaultRequiredProps} error={true} />
    );

    expect(getByText('Ups, something in our servers went wrong!')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('fire onSubmit with initial data', () => {
    const submitFn = jest.fn();
    const { container, getByTestId } = render(
      <Form
        {...defaultRequiredProps}
        member={data.people[0]}
        handleChangeMember={submitFn}
      />
    );

    fireEvent.submit(getByTestId('userForm'));
    expect(submitFn).toHaveBeenCalled();

    expect(container).toMatchSnapshot();
  });

  it('fire onSubmit without initial data', () => {
    const submitFn = jest.fn((event) => {
      const fromData = new FormData(event.target);
      const memberInput = Object.fromEntries(fromData);

      memberInput.salary = Number(memberInput.salary);

      return memberInput;
    });

    const { container, getByTestId } = render(
      <Form {...defaultRequiredProps} handleChangeMember={submitFn} />
    );

    const inputName = container.querySelector('input[name="name"]');
    const inputJobTitle = container.querySelector('input[name="jobTitle"]');
    const selectCountry = container.querySelector('select[name="country"]');
    const inputSalary = container.querySelector('input[name="salary"]');
    const selectCurrency = container.querySelector('select[name="currency"]');
    const inputsEmployment = container.querySelectorAll(
      'input[name="employment"]'
    );

    const user = { ...data.people[0] };

    fireEvent.change(inputName, { target: { value: user.name } });
    fireEvent.change(inputJobTitle, { target: { value: user.jobTitle } });
    fireEvent.change(selectCountry, { target: { value: user.country } });
    fireEvent.change(inputSalary, { target: { value: user.salary } });
    fireEvent.change(selectCurrency, { target: { value: user.currency } });
    const position = user.employment === 'contractor' ? 0 : 1;
    fireEvent.click(inputsEmployment[position]);

    fireEvent.submit(getByTestId('userForm'));

    const results = submitFn.mock.results[0].value;
    results.id = user.id;

    expect(results).toEqual(user);
    expect(submitFn).toHaveBeenCalledTimes(1);

    expect(container).toMatchSnapshot();
  });
});
