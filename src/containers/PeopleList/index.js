import React from 'react';
import { useHistory } from 'react-router-dom';

import Text from 'components/Text';
import Button from 'components/Button';
import { Card } from 'components/Card';
import InputSearch from 'components/Form/InputSearch';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import usersData from '../../server/db.json';

import UsersTable from './Table';

import {
  StyledContainer,
  StyledCardBody,
  StyledSectionHeader,
  StyledTitleComponent,
  StyledTextLight,
  StyledTextFieldWrapper,
} from './styled.index';

const TABLE_BODY_HEIGHT = 467;

const PeopleList = () => {
  const { push } = useHistory();
  const { people } = usersData;

  return (
    <StyledContainer>
      <StyledSectionHeader>
        <StyledTitleComponent>
          <Text size='h2' as='h1'>
            People
          </Text>
          <StyledTextLight size='bodyCaption' as='span'>
            3 employees
          </StyledTextLight>
        </StyledTitleComponent>

        <Button
          prefix={<IconUser width={20} />}
          onClick={() => push('/create-employee')}
        >
          Add member
        </Button>
      </StyledSectionHeader>

      <Card>
        <StyledCardBody>
          <StyledTextFieldWrapper>
            <InputSearch placeholder='Search employees...' />
          </StyledTextFieldWrapper>

          <UsersTable people={people} tBodyHeight={TABLE_BODY_HEIGHT} />
        </StyledCardBody>
      </Card>
    </StyledContainer>
  );
};

export default PeopleList;
