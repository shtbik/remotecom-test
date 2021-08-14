import styled from 'styled-components';

import TextField from '../TextField';
import {
  StyledInputWrapper,
  StyledInput,
  StyledPrefix,
} from '../TextField/styled.index';

export const StyledTextField = styled(TextField)`
  ${StyledInputWrapper} {
    padding: 11px 16px;
    border: 1px solid transparent;

    &:hover,
    &:active,
    &:focus,
    &:focus-within {
      background: var(--colors-search-active-background);
      border: 1px solid var(--colors-search-active-border);
      box-shadow: inset 1px 2px 3px var(--colors-search-active-shadow);
      border-radius: 20px;
    }

    ${StyledPrefix} {
      line-height: 1;
      cursor: pointer;
    }

    ${StyledInput} {
      padding: 0;
      font-size: 0.875rem;
      letter-spacing: 0.4px;
    }
  }
`;
