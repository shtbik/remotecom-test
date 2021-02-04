import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import countriesList from 'configs/countries';
import { TMember } from 'redux/people/types';

import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import LoadingLogo from 'components/LoadingLogo';

import RadioGroup from './RadioGroup';

import {
  StyledTextBodyLead,
  StyledWrapperRadioGroup,
  StyledSelectField,
  StyledLoadingWrapper,
  StyledAlert,
} from './styled.index';

const Form = ({ member, loading, error, handleChangeMember }) => {
  const { name, jobTitle, country, salary, currency, employment } = member;

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

  return (
    <form onSubmit={handleChangeMember} id='userForm' data-testid='userForm'>
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
    </form>
  );
};

Form.propTypes = {
  member: PropTypes.shape(TMember),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  handleChangeMember: PropTypes.func.isRequired,
};

export default memo(Form);
