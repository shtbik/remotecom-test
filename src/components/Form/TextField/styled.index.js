import styled from 'styled-components';

export const StyledInputWrapper = styled.span`
  display: flex;
  align-items: center;
  border-bottom: 1.5px solid var(--colors-pigeon);

  &:hover,
  &:focus {
    border-bottom-color: var(--colors-irisBlue);
  }

  &::-webkit-input-placeholder,
  &::placeholder {
    color: var(--colors-bayoux);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: var(--colors-darkBlue);
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 4px 0 8px;

  &:hover,
  &:focus {
    outline: none;
  }

  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const StyledPrefix = styled.span`
  margin-right: 12px;
`;
