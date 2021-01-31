import PropTypes from 'prop-types';

import { StyledButton, StyledPrefix } from './styled.index';

export default function Button({ children, prefix, ...props }) {
  return (
    <StyledButton type='button' {...props}>
      {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /** Button text content */
  children: PropTypes.node,
  /** The prefix component (Icons, etc.) */
  prefix: PropTypes.node,
};
