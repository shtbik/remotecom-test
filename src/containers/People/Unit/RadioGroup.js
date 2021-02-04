import React, { useMemo, memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Text, { TextLight } from 'components/Text';

import { StyledRadioGroup, StyledLabelWrapper } from './styled.index';

const RadioGroup = memo(({ defaultValue }) => {
  const [memberType, setMemberType] = useState(defaultValue);
  const handleChange = useCallback(
    (event) => {
      setMemberType(event.target.value);
    },
    [setMemberType]
  );

  const options = useMemo(
    () => [
      {
        value: 'contractor',
        wrapper: StyledLabelWrapper,
        label: (
          <div>
            <Text size='bodySmall' as='div'>
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
        wrapper: StyledLabelWrapper,
        label: (
          <div>
            <Text size='bodySmall' as='div'>
              Employee
            </Text>
            <TextLight size='bodySmall' as='div'>
              Hire and manage remotely
            </TextLight>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <StyledRadioGroup
      name='employment'
      value={memberType}
      onChange={handleChange}
      options={options}
      required
    />
  );
});

RadioGroup.defaultProps = {
  defaultValue: '',
};

RadioGroup.propType = {
  /** Input native property */
  defaultValue: PropTypes.oneOf(['contractor', 'employee']),
};

export default RadioGroup;
