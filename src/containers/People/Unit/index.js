import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMember, createOrUpdateMember } from 'redux/people';

import { TextLight } from 'components/Text';
import { Card } from 'components/Card';

import Form from './Form';

import {
  StyledContainer,
  StyledCardHeader,
  StyledTextH4,
  StyledCardBody,
  StyledCardFooter,
  StyledButton,
  StyledButtonCancel,
} from './styled.index';

// TODO: add normal validation for the future
const MemberForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { member, loading, error } = useSelector((state) => state);
  const handleListLink = useCallback(() => push('/people'), [push]);

  const handleChangeMember = async (event) => {
    event.preventDefault();

    const fromData = new FormData(event.target);
    const memberInput = Object.fromEntries(fromData);

    memberInput.salary = Number(memberInput.salary);
    const newUserId = await dispatch(createOrUpdateMember({ id, memberInput }));

    if (!id && newUserId) {
      push(`/people`);
    }
  };

  useEffect(() => {
    if (id) dispatch(fetchMember(id));
  }, [dispatch, id]);

  return (
    <StyledContainer>
      <Card>
        <StyledCardHeader>
          <StyledTextH4 size='h4' as='h1'>
            {id ? 'Edit team member' : 'Add a new team member'}
          </StyledTextH4>
          <TextLight size='bodySmall' as='p'>
            Fill out the information of your new team member.
          </TextLight>
        </StyledCardHeader>

        <StyledCardBody>
          <Form
            member={member}
            loading={loading}
            error={error}
            handleChangeMember={handleChangeMember}
          />
        </StyledCardBody>
        <StyledCardFooter>
          <StyledButtonCancel variant='outlined' onClick={handleListLink}>
            Cancel
          </StyledButtonCancel>
          <StyledButton
            type='submit'
            loading={loading}
            disabled={loading}
            form='userForm'
          >
            {id ? 'Save' : 'Add employee'}
          </StyledButton>
        </StyledCardFooter>
      </Card>
    </StyledContainer>
  );
};

export default MemberForm;
