import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';
import { TRadioButton } from '../RadioButton/types';

const RadioGroup = ({
  name,
  options,
  value,
  defaultValue,
  className,
  onChange,
}) => {
  const [activeValue, setActiveValue] = useState(defaultValue);
  const isUncontrolled = value == null;
  const resultValue = isUncontrolled ? activeValue : value;

  const handleChange = (event) => {
    const { value } = event.target;

    if (isUncontrolled) {
      setActiveValue(value);
    }

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={className}>
      {options.map(({ value: optionValue, label, wrapper }) => (
        <RadioButton
          key={optionValue}
          name={name}
          value={optionValue}
          label={label}
          wrapper={wrapper}
          checked={optionValue === resultValue}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

RadioGroup.defaultProps = {
  defaultValue: null,
  className: '',
};

RadioGroup.propTypes = {
  /** Name of input groupe */
  name: PropTypes.string.isRequired,
  /** Settings for each RadioButton */
  options: PropTypes.arrayOf(PropTypes.shape(TRadioButton)).isRequired,
  /** Initial value of group */
  defaultValue: PropTypes.string,
  /** Class for external styles */
  className: PropTypes.string,
};

export default RadioGroup;
