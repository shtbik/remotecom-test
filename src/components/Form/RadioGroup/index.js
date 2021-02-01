import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';
import { TRadioButton } from '../RadioButton/types';

const RadioGroup = ({ name, options, defaultValue, className }) => {
  const [activeValue, setActiveValue] = useState(defaultValue);

  const handleChange = (event) => {
    setActiveValue(event.target.value);
  };

  return (
    <div className={className}>
      {options.map(({ value: optionValue, label }) => (
        <RadioButton
          key={optionValue}
          name={name}
          value={optionValue}
          label={label}
          checked={optionValue === activeValue}
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
