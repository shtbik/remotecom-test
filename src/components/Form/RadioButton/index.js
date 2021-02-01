import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { TRadioButton } from './types';

import {
  StyledLabel,
  StyledLabelContentWrapper,
  StyledInputRadio,
  StyledInputRadioButton,
} from './styled.index';

const RadioButton = ({
  name,
  value,
  label,
  defaultChecked,
  checked,
  onChange,
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

  return (
    <StyledLabel>
      {label ? (
        <StyledLabelContentWrapper>{label}</StyledLabelContentWrapper>
      ) : null}

      <StyledInputRadio
        type='radio'
        name={name}
        value={value}
        checked={resultChecked}
        onChange={handleChange}
      />
      <StyledInputRadioButton checked={resultChecked} />
    </StyledLabel>
  );
};

RadioButton.defaultProps = {
  label: null,
  defaultChecked: null,
  checked: null,
  onChange: null,
};

RadioButton.propTypes = { ...TRadioButton, name: PropTypes.string.isRequired };

const memoizedRadioButton = memo(RadioButton);

export default memoizedRadioButton;
