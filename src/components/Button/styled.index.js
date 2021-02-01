import styled, { css } from 'styled-components';

const getButtonStylesByVariant = (variant) => {
  switch (variant) {
    case 'outlined':
      return css`
        border: 2px solid var(--colors-moonraker);
        background: var(--colors-blank);
        color: var(--colors-irisBlue);

        &:hover {
          background: var(--colors-selago);
          color: var(--colors-irisBlue);
          border-color: var(--colors-irisBlue);
        }
      `;
    case 'contained':
    default:
      return css`
        background: var(--colors-irisBlue);
        color: var(--colors-blank);

        &:hover {
          background: var(--colors-royalBlue);
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
  min-height: 44px;
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
  letter-spacing: 0.5px;
  cursor: pointer;

  ${({ variant }) => getButtonStylesByVariant(variant)}
`;

export const StyledPrefix = styled.span`
  margin-right: 9px;

  path {
    fill: var(--colors-blank);
  }
`;
