import { cleanup, render, fireEvent } from '@testing-library/react';
import Button from '..';

const text = 'Hello';
const addonText = 'prefix';
const CustomJSX = <div>{addonText}</div>;

describe('Button', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByRole, getByText, container } = render(<Button>{text}</Button>);

    const button = getByRole('button');
    expect(button.getAttribute('type')).toBe('button');
    expect(getByText(text)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('different type', () => {
    const { container } = render(<Button type='submit'>{text}</Button>);

    expect(
      container.querySelector('button[type="submit"]')
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('spreads custom attributes', () => {
    const { container, getByRole } = render(
      <Button data-foo='12'>{text}</Button>
    );

    const button = getByRole('button');
    expect(button.getAttribute('data-foo')).toBe('12');

    expect(container).toMatchSnapshot();
  });

  it('firing onClick', () => {
    const clickFn = jest.fn();
    const { container, getByRole } = render(
      <Button onClick={clickFn}>{text}</Button>
    );

    const button = getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(2);

    expect(container).toMatchSnapshot();
  });

  it('onClick with disabled state', () => {
    const clickFn = jest.fn();
    const { container, getByRole } = render(
      <Button disabled onClick={clickFn}>
        {text}
      </Button>
    );

    const button = getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(0);

    expect(container).toMatchSnapshot();
  });

  it('add prefix component', () => {
    const { container, getByText } = render(
      <Button prefix={CustomJSX}>{text}</Button>
    );

    expect(container.querySelector('span > div').innerHTML).toBe(addonText);
    expect(getByText(text)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('loading state', () => {
    const { container, queryByText } = render(<Button loading>{text}</Button>);

    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(queryByText(text)).toBeNull();

    expect(container).toMatchSnapshot();
  });

  it('different variant', () => {
    const { container } = render(<Button variant='outlined'>{text}</Button>);

    expect(container).toMatchSnapshot();
  });
});
