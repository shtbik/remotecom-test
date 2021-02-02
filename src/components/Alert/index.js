import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

import { StyledAlert, StyledWrapper } from './styled.index';

const getIcon = (type) => {
  switch (type) {
    case 'error':
    default:
      return <IconTimesCircle width='22' fill='var(--colors-error-icon)' />;
  }
};

const Alert = memo(({ type, message }) => {
  const Icon = getIcon(type);
  return (
    <StyledAlert type={type}>
      {Icon} <StyledWrapper>{message}</StyledWrapper>
    </StyledAlert>
  );
});

Alert.propTypes = {
  /** Type of alert for defferent styles */
  type: PropTypes.oneOf(['error']).isRequired,
  /** To show what is alert about */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Alert;
