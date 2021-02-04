import styled from 'styled-components';

export const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 24px 29px 24px;
  background: linear-gradient(0deg, var(--colors-error), var(--colors-error)),
    var(--colors-blank);
  border: 1.5px solid var(--colors-error-border);
  box-sizing: border-box;
  border-radius: 8px;
  color: var(--colors-bayoux);
`;

export const StyledMessage = styled.div`
  margin-left: 15px;
  letter-spacing: 0.5px;
`;
