import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as IconLoading } from 'theme/icons/loading.svg';

const getButtonStylesByVariant = (variant) => {
  switch (variant) {
    case 'outlined':
      return css`
        border-width: 2px;
        background: var(--colors-blank);
        border-color: var(--colors-moonraker);
        color: var(--colors-irisBlue);

        &:hover {
          background: var(--colors-selago);
          color: var(--colors-irisBlue);
        }

        &:focus {
          border-width: 3px;
          border-color: var(--colors-spindle);
        }
      `;
    case 'contained':
    default:
      return css`
        background: var(--colors-irisBlue);
        border-color: var(--colors-irisBlue);
        color: var(--colors-blank);

        &:hover {
          background: var(--colors-royalBlue);
          border-color: var(--colors-royalBlue);
        }

        &:focus {
          border-color: var(--colors-moonraker);
        }
      `;
  }
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  height: 44px;
  padding: 10px 25px;
  border-width: 3px;
  border-style: solid;
  border-radius: 50px;
  letter-spacing: 0.5px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;

  ${({ variant }) => getButtonStylesByVariant(variant)}

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledPrefix = styled.span`
  margin-right: 9px;

  path {
    fill: var(--colors-blank);
  }
`;

const external = keyframes` 
  100% {
    transform: rotate(360deg);
  }
`;

const getLoaderStylesByVariant = (variant) => {
  switch (variant) {
    case 'outlined':
      return css`
        circle {
          fill: var(--colors-moonraker);
        }

        path {
          fill: var(--colors-irisBlue);
        }
      `;
    case 'contained':
    default:
      return ``;
  }
};

export const StyledIconLoading = styled(IconLoading)`
  animation: ${external} 1s linear infinite;

  ${({ variant }) => getLoaderStylesByVariant(variant)}
`;
