import React, { useRef, memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

import { StyledTextField } from './styled.index';

const InputSearch = ({ placeholder, onSearch }) => {
  const inputRef = useRef();

  const handleSearch = useCallback(
    (event) => {
      event.preventDefault();
      const value = inputRef.current?.value;
      onSearch(value);
    },
    [onSearch]
  );

  return (
    <form onSubmit={handleSearch}>
      <StyledTextField
        ref={inputRef}
        type='search'
        placeholder={placeholder}
        prefix={<IconSearch height={16} width={16} onClick={handleSearch} />}
      />
    </form>
  );
};

InputSearch.defaultProps = {
  placeholder: 'Enter your search query',
  onSearch: () => {},
};

InputSearch.propTypes = {
  /** Native property of input tag */
  placeholder: PropTypes.string,
  /** Function will return you a string - search query */
  onSearch: PropTypes.func,
};

export default memo(InputSearch);
