import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Hint, THint } from '../Hint';
import { Label, Field } from '../FieldParts';

import { StyledInput, StyledInputWrapper, StyledPrefix } from './styled.index';

const TextField = forwardRef(
  ({ label, helper, errorMsg, prefix, suffix, className, ...props }, ref) => {
    const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

    return (
      <Field as='label' className={className}>
        {label && <Label>{label}</Label>}

        <StyledInputWrapper>
          {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
          <StyledInput ref={ref} {...props} {...invalidAttr} />
          {suffix && <StyledPrefix>{suffix}</StyledPrefix>}
        </StyledInputWrapper>

        {(errorMsg || helper) && <Hint errorMsg={errorMsg} helper={helper} />}
      </Field>
    );
  }
);

TextField.defaultProps = {
  type: 'text',
  label: null,
  prefix: null,
  suffix: null,
};

TextField.propTypes = {
  /** Field type */
  type: PropTypes.string,
  /** Field label */
  label: PropTypes.string,
  /** The prefix component (Icons, etc.) */
  prefix: PropTypes.node,
  /** The suffix component (Selects, etc.) */
  suffix: PropTypes.node,
  ...THint,
};

export default TextField;
