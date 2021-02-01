import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledLabelContentWrapper = styled.div`
  margin-right: 50px;
`;

export const StyledInputRadio = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

export const StyledInputRadioButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  z-index: 1;

  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ checked }) =>
    checked ? css`var(--colors-irisBlue)` : css`var(--colors-lynch)`};
  border-radius: 50%;

  ${({ checked }) =>
    checked
      ? css`
          &:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--colors-irisBlue);
          }
        `
      : ''}
`;
