import Text, { TextLight } from 'components/Text';

import {
  Wrapper,
  StyledContainer,
  ProfileLink,
  ProfileAvatar,
  ProfileInfo,
} from './styled.index';

export default function Header() {
  const userFake = { name: 'Julie Howard', role: 'Admin', picUrl: null };

  return (
    <Wrapper>
      <StyledContainer as='div'>
        <ProfileLink href='#profile-page'>
          <ProfileAvatar as='span' src={userFake.picUrl} />
          <ProfileInfo>
            <Text size='bodyMedium'>{userFake.name}</Text>
            <TextLight size='bodyCaption'>{userFake.role}</TextLight>
          </ProfileInfo>
        </ProfileLink>
      </StyledContainer>
    </Wrapper>
  );
}
