import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TRadioButton } from './types';

import {
  StyledLabel,
  StyledInputRadio,
  StyledInputRadioButton,
} from './styled.index';

const RadioButton = ({
  name,
  value,
  label,
  wrapper: Wrapper,
  defaultChecked,
  checked,
  onChange,
  required,
}) => {
  const [activeValue, setActiveValue] = useState(defaultChecked && value);
  const isUncontrolled = checked == null;
  const resultChecked = isUncontrolled ? activeValue === value : checked;

  const handleChange = (event) => {
    const { value: targetValue } = event.target;

    if (isUncontrolled) {
      setActiveValue(targetValue);
    }

    if (onChange) {
      onChange(event);
    }
  };

  const Component = (
    <StyledLabel>
      {label || null}

      <StyledInputRadio
        type='radio'
        name={name}
        value={value}
        checked={resultChecked}
        onChange={handleChange}
        required={required}
      />
      <StyledInputRadioButton checked={resultChecked} />
    </StyledLabel>
  );

  return Wrapper ? (
    <Wrapper checked={resultChecked}>{Component}</Wrapper>
  ) : (
    Component
  );
};

RadioButton.defaultProps = {
  label: null,
  defaultChecked: null,
  checked: null,
  onChange: null,
  required: false,
};

RadioButton.propTypes = {
  ...TRadioButton,
  /** Native property of input */
  name: PropTypes.string.isRequired,
};

export default RadioButton;
