import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { getIcon } from './base';
import { StyledAlert, StyledMessage } from './styled.index';

const Alert = ({ type, message, className }) => {
  const Icon = getIcon(type);
  return (
    <StyledAlert type={type} className={className}>
      {Icon} <StyledMessage>{message}</StyledMessage>
    </StyledAlert>
  );
};

Alert.defaultProps = {
  className: '',
};

Alert.propTypes = {
  /** Type of alert for different styles */
  type: PropTypes.oneOf(['error']).isRequired,
  /** To show what is alert about */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** ClassName for styles */
  className: PropTypes.string,
};

export default memo(Alert);
