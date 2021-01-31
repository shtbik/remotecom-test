import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
  letter-spacing: 0.5px;

  background: var(--colors-irisBlue);
  color: var(--colors-blank);

  &:hover {
    cursor: pointer;
    background: var(--colors-darkBlue);
  }
`;

export const StyledPrefix = styled.span`
  margin-right: 9px;

  path {
    fill: var(--colors-blank);
  }
`;
