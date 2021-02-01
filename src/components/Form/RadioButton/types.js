import PropTypes from 'prop-types';

export const TRadioButton = {
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
