import { memo } from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledPrefix, StyledIconLoading } from './styled.index';

const Button = memo(
  ({ type, variant, children, prefix, loading, ...props }) => {
    return (
      <StyledButton type={type} variant={variant} {...props}>
        {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
        {loading ? <StyledIconLoading variant={variant} /> : children}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  type: 'button',
  variant: 'contained',
  loading: false,
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
  /** For the loading state */
  loading: PropTypes.bool,
};

export default Button;
