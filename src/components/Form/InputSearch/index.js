import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

import { StyledTextField } from './styled.index';

const InputSearch = ({ placeholder }) => {
  return (
    <StyledTextField
      type='search'
      placeholder={placeholder}
      prefix={<IconSearch height={16} width={16} />}
    />
  );
};

InputSearch.defaultProps = {
  placeholder: 'Enter your search query',
};

InputSearch.propTypes = {
  // ** Native property of input tag */
  placeholder: PropTypes.string,
};

export default InputSearch;
