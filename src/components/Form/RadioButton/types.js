import PropTypes from 'prop-types';

/** All properties are native for the input[type=radio] */
export const TRadioButton = {
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
