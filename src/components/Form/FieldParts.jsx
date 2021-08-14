import styled from 'styled-components';

export const Field = styled.div`
  display: block;
  font-size: 0.8125rem;

  --labelColor: var(--colors-bayoux);

  &:focus-within {
    --labelColor: var(--colors-irisBlue);
  }

  & + & {
    margin-top: 32px;
  }
`;

export const Label = styled.span`
  display: block;
  color: var(--labelColor);
`;
