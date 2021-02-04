import { memo } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  width: 100%;
  max-width: var(--layout-width);
`;

export default memo(Container);
