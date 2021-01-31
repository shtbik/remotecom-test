import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 1rem;
  line-height: 1;
  color: var(--colors-irisBlue);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--colors-darkBlue);
  }

  &:visited {
    color: var(--colors-darkBlue);
  }
`;
