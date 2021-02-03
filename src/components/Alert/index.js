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

const Alert = memo(({ type, message, className }) => {
  const Icon = getIcon(type);
  return (
    <StyledAlert type={type} className={className}>
      {Icon} <StyledWrapper>{message}</StyledWrapper>
    </StyledAlert>
  );
});

Alert.defaultProps = {
  className: '',
};

Alert.propTypes = {
  /** Type of alert for defferent styles */
  type: PropTypes.oneOf(['error']).isRequired,
  /** To show what is alert about */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** ClassName for styles */
  className: PropTypes.string,
};

export default Alert;
