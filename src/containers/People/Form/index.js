import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Text, { TextLight } from 'components/Text';
import { Card, CardHeader } from 'components/Card';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';

import countriesList from 'configs/countries';

import {
  StyledContainer,
  StyledCardBody,
  StyledCardFooter,
  StyledButton,
  StyledButtonCancel,
  StyledTextBodyLead,
  StyledRadioGroup,
  StyledWrapperRadioGroup,
} from './styled.index';

const MemberForm = () => {
  const { push } = useHistory();
  const handleListLink = useCallback(() => push('/people'), [push]);

  return (
    <StyledContainer>
      <Card>
        <CardHeader>
          <Text size='h4' as='h1'>
            Add a new team member
          </Text>
          <TextLight size='bodySmall' as='p'>
            Fill out the information of your new team member.
          </TextLight>
        </CardHeader>
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
            />

            <StyledWrapperRadioGroup>
              <StyledTextBodyLead size='bodyLead' as='p'>
                Type of employment
              </StyledTextBodyLead>

              <StyledRadioGroup
                name='type'
                options={[
                  {
                    value: 'contractor',
                    label: (
                      <div>
                        <Text size='bodyMedium' as='div'>
                          Contractor
                        </Text>
                        <TextLight size='bodySmall' as='div'>
                          Pay your contractors
                        </TextLight>
                      </div>
                    ),
                  },
                  {
                    value: 'employee',
                    label: (
                      <div>
                        <Text size='bodyMedium' as='div'>
                          Employee
                        </Text>
                        <TextLight size='bodySmall' as='div'>
                          Hire and manage remotely
                        </TextLight>
                      </div>
                    ),
                  },
                ]}
              />
            </StyledWrapperRadioGroup>
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
