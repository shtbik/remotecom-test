import { memo } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]}
`;

export default memo(Text);

export const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;
