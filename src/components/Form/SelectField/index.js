import React from 'react';
import PropTypes from 'prop-types';

import { Field, Label, Hint } from '../FieldParts';

import { Select } from './styled.index';

export default function SelectField({
  children,
  label,
  helper,
  errorMsg,
  ...props
}) {
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
}

SelectField.defaultProps = {
  label: null,
};

SelectField.propTypes = {
  /** Field label */
  label: PropTypes.string,
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
};
