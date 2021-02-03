import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import countriesList from 'configs/countries';
import { fetchMember } from 'redux/people';

import { TextLight } from 'components/Text';
import { Card } from 'components/Card';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import Alert from 'components/Alert';
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
} from './styled.index';

const MemberForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { member, loading, error } = useSelector((state) => state);
  const handleListLink = useCallback(() => push('/people'), [push]);

  const { name, jobTitle, country, salary, currency, employment } = member;

  const handleSubmit = (event) => {
    event.preventDefault();

    const fromData = new FormData(event.target);
    const requestData = Object.fromEntries(fromData);

    console.log(requestData);
  };

  useEffect(() => {
    if (id) dispatch(fetchMember(id));
  }, [dispatch, id]);

  return (
    <StyledContainer>
      <Card>
        <StyledCardHeader>
          <StyledTextH4 size='h4' as='h1'>
            Add a new team member
          </StyledTextH4>
          <TextLight size='bodySmall' as='p'>
            Fill out the information of your new team member.
          </TextLight>
        </StyledCardHeader>

        <form onSubmit={handleSubmit}>
          <StyledCardBody>
            {loading ? (
              <StyledLoadingWrapper>
                <LoadingLogo />
              </StyledLoadingWrapper>
            ) : (
              <>
                <TextField
                  name='name'
                  label='Name'
                  defaultValue={name}
                  required
                  placeholder='e.g. Kim Fog'
                  helper='First and last name'
                />
                <TextField
                  name='jobTitle'
                  label='Job title'
                  defaultValue={jobTitle}
                  required
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
                  <option value='' hidden>
                    Select country
                  </option>
                  {countriesList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </SelectField>
                <TextField
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

                {error && (
                  <Alert
                    type='error'
                    message='Ups, something in our servers went wrong!'
                  />
                )}
              </>
            )}
          </StyledCardBody>
          <StyledCardFooter>
            <StyledButtonCancel variant='outlined' onClick={handleListLink}>
              Cancel
            </StyledButtonCancel>
            <StyledButton type='submit' disabled={loading}>
              Add employee
            </StyledButton>
          </StyledCardFooter>
        </form>
      </Card>
    </StyledContainer>
  );
};

export default MemberForm;
