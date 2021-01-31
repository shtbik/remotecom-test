import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label, Hint, Field } from '../FieldParts';

import { StyledInput, StyledInputWrapper, StyledPrefix } from './styled.index';

const TextField = forwardRef(
  ({ label, helper, errorMsg, prefix, className, ...props }, ref) => {
    const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

    return (
      <Field as='label' className={className}>
        {label && <Label>{label}</Label>}

        <StyledInputWrapper>
          {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
          <StyledInput ref={ref} {...props} {...invalidAttr} />
        </StyledInputWrapper>

        {errorMsg || (helper && <Hint errorMsg={errorMsg} helper={helper} />)}
      </Field>
    );
  }
);

TextField.defaultProps = {
  type: 'text',
  label: null,
  prefix: null,
};

TextField.propTypes = {
  /** Field type */
  type: PropTypes.string,
  /** Field label */
  label: PropTypes.string,
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
  /** The prefix component (Icons, etc.) */
  prefix: PropTypes.node,
};

export default TextField;
