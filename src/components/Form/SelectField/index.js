import React from 'react';
import PropTypes from 'prop-types';

import { Hint, THint } from '../Hint';
import { Field, Label } from '../FieldParts';

import { Select } from './styled.index';

const SelectField = ({ children, label, helper, errorMsg, ...props }) => {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as='label'>
      {label && <Label>{label}</Label>}
      <Select {...props} {...invalidAttr}>
        {children}
      </Select>
      {(errorMsg || helper) && <Hint errorMsg={errorMsg} helper={helper} />}
    </Field>
  );
};

SelectField.defaultProps = {
  label: null,
};

SelectField.propTypes = {
  /** Field label */
  label: PropTypes.string,
  ...THint,
};

export default SelectField;
