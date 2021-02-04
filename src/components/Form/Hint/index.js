import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Text, ErrorMsg } from './styled.index';

export const Hint = memo(({ errorMsg, helper }) => {
  return (
    <Text>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {errorMsg && helper && ' - '}
      {helper}
    </Text>
  );
});

export const THint = {
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
};

Hint.propTypes = THint;
