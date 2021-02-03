import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import countriesList from 'configs/countries';
import { fetchMember, createOrUpdateMember } from 'redux/people';

import { TextLight } from 'components/Text';
import { Card } from 'components/Card';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import LoadingLogo from 'components/LoadingLogo';

import RadioGroup from './RadioGroup';

import {
  StyledContainer,
  StyledCardHeader,
  StyledTextH4,
  StyledCardBody,
  StyledCardFooter,
  StyledButton,
  StyledButtonCancel,
  StyledTextBodyLead,
  StyledWrapperRadioGroup,
  StyledSelectField,
  StyledLoadingWrapper,
  StyledAlert,
} from './styled.index';

// TODO: add validation for the future
const MemberForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { member, loading, error } = useSelector((state) => state);
  const handleListLink = useCallback(() => push('/people'), [push]);
  const countryOptions = useMemo(
    () => (
      <>
        <option value='' hidden>
          Select country
        </option>
        {countriesList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </>
    ),
    []
  );

  const { name, jobTitle, country, salary, currency, employment } = member;

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

        <form onSubmit={handleChangeMember}>
          <StyledCardBody>
            {/* Not best UX, which I can make  */}
            {loading ? (
              <StyledLoadingWrapper>
                <LoadingLogo />
              </StyledLoadingWrapper>
            ) : (
              <>
                {error && (
                  <StyledAlert
                    type='error'
                    message='Ups, something in our servers went wrong!'
                  />
                )}

                <TextField
                  name='name'
                  label='Name'
                  defaultValue={name}
                  required
                  maxlength='50'
                  placeholder='e.g. Kim Fog'
                  helper='First and last name'
                />
                <TextField
                  name='jobTitle'
                  label='Job title'
                  defaultValue={jobTitle}
                  required
                  maxlength='50'
                  placeholder='e.g. Product Manager'
                  helper='What is their role?'
                />
                <SelectField
                  name='country'
                  label='Country'
                  defaultValue={country}
                  required
                  helper='Where are they based?'
                >
                  {countryOptions}
                </SelectField>
                {/* TODO: add parse for salary */}
                <TextField
                  type='number'
                  min={0}
                  max={100000000}
                  name='salary'
                  label='Salary'
                  defaultValue={salary}
                  required
                  placeholder='e.g. 5000'
                  helper='Gross yearly salary'
                  suffix={
                    <StyledSelectField
                      name='currency'
                      defaultValue={currency}
                      required
                    >
                      <option value='EUR'>EUR</option>
                      <option value='USD'>USD</option>
                      <option value='GBP'>GBP</option>
                    </StyledSelectField>
                  }
                />

                <StyledWrapperRadioGroup>
                  <StyledTextBodyLead size='bodyLead' as='p'>
                    Type of employment
                  </StyledTextBodyLead>
                  <RadioGroup defaultValue={employment} />
                </StyledWrapperRadioGroup>
              </>
            )}
          </StyledCardBody>
          <StyledCardFooter>
            <StyledButtonCancel variant='outlined' onClick={handleListLink}>
              Cancel
            </StyledButtonCancel>
            <StyledButton type='submit' loading={loading} disabled={loading}>
              {id ? 'Save' : 'Add employee'}
            </StyledButton>
          </StyledCardFooter>
        </form>
      </Card>
    </StyledContainer>
  );
};

export default MemberForm;
