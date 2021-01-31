import styled from 'styled-components';

import Container from 'components/Container';

export const Wrapper = styled.header`
  background-color: var(--colors-blank);
  width: 100%;
`;

export const StyledContainer = styled(Container)`
  height: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 1rem;
  transition: box-shadow 250ms ease;

  &:hover,
  &:focus {
    outline: none;
    text-decoration: none;
    box-shadow: 0 0 3px var(--colors-irisBlue);
  }
`;
export const ProfileAvatar = styled.img`
  display: block;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background-color: var(--colors-cosmos);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  line-height: 1.3;
`;
