import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styled.index';

const Link = ({ children, to, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  /** Relative path, native property of Link from react-router-dom */
  to: PropTypes.string.isRequired,
};

export default Link;
