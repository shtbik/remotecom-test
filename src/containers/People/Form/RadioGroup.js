import React, { useState } from 'react';

import Text, { TextLight } from 'components/Text';

import { StyledRadioGroup, StyledLabelWrapper } from './styled.index';

const RadioGroup = () => {
  const [memberType, setMemberType] = useState('');

  return (
    <StyledRadioGroup
      name='memberType'
      value={memberType}
      onChange={setMemberType}
      options={[
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
      ]}
    />
  );
};

export default RadioGroup;
