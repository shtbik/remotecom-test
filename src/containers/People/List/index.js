import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Text from 'components/Text';
import Button from 'components/Button';
import { Card } from 'components/Card';
import InputSearch from 'components/Form/InputSearch';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import { fetchPeople } from 'redux/people';

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
  const dispatch = useDispatch();
  const { people, loading, error, query: prevQuery } = useSelector(
    (state) => state
  );
  const handleMemberLink = useCallback(() => push('/people/add'), [push]);
  const handleSearch = (query) => {
    // for cases when user wants to search empty query and has already loaded full list
    if ((!prevQuery && !query && people.length) || prevQuery === query)
      return false;
    dispatch(fetchPeople(query));
  };

  const isReadyToShowNubmerOfPeople = useMemo(
    () => people.length >= 0 && !loading && !error,
    [people, loading, error]
  );

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledSectionHeader>
        <StyledTitleComponent>
          <Text size='h2' as='h1'>
            People
          </Text>
          <StyledTextLight size='bodyCaption' as='span'>
            {isReadyToShowNubmerOfPeople ? `${people.length} employees` : ''}
          </StyledTextLight>
        </StyledTitleComponent>

        <Button prefix={<IconUser width={20} />} onClick={handleMemberLink}>
          Add member
        </Button>
      </StyledSectionHeader>

      <Card>
        <StyledCardBody>
          <StyledTextFieldWrapper>
            <InputSearch
              placeholder='Search employees...'
              onSearch={handleSearch}
            />
          </StyledTextFieldWrapper>

          <UsersTable
            people={people}
            tBodyHeight={TABLE_BODY_HEIGHT}
            loading={loading}
            error={error}
          />
        </StyledCardBody>
      </Card>
    </StyledContainer>
  );
};

export default PeopleList;
