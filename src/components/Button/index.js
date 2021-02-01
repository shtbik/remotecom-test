import PropTypes from 'prop-types';

import { StyledButton, StyledPrefix } from './styled.index';

export default function Button({ type, variant, children, prefix, ...props }) {
  return (
    <StyledButton type={type} variant={variant} {...props}>
      {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  variant: 'contained',
};

Button.propTypes = {
  /** Native button's tag property */
  type: PropTypes.string,
  /** Various types of view */
  variant: PropTypes.oneOf(['contained', 'outlined']),
  /** Button text content */
  children: PropTypes.node,
  /** The prefix component (Icons, etc.) */
  prefix: PropTypes.node,
};
