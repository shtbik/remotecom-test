import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import countriesList from 'configs/countries';

import { TextLight } from 'components/Text';
import { Card } from 'components/Card';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import Alert from 'components/Alert';

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
} from './styled.index';

const MemberForm = () => {
  const { push } = useHistory();
  const handleListLink = useCallback(() => push('/people'), [push]);

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
        <form>
          <StyledCardBody>
            <TextField
              label='Name'
              placeholder='e.g. Kim Fog'
              helper='First and last name'
            />
            <TextField
              label='Job title'
              placeholder='e.g. Product Manager'
              helper='What is their role?'
            />
            <SelectField
              label='Country'
              defaultValue=''
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
              label='Salary'
              placeholder='e.g. 5000'
              helper='Gross yearly salary'
              suffix={
                <StyledSelectField>
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
              <RadioGroup />
            </StyledWrapperRadioGroup>

            <Alert
              type='error'
              message='Ups, something in our servers went wrong!'
            />
          </StyledCardBody>
          <StyledCardFooter>
            <StyledButtonCancel variant='outlined' onClick={handleListLink}>
              Cancel
            </StyledButtonCancel>
            <StyledButton type='submit'>Add employee</StyledButton>
          </StyledCardFooter>
        </form>
      </Card>
    </StyledContainer>
  );
};

export default MemberForm;
