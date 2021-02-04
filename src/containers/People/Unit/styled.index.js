import styled from 'styled-components';

import Container from 'components/Container';
import { CardHeader, CardBody, CardFooter } from 'components/Card';
import Button from 'components/Button';
import Text from 'components/Text';
import RadioGroup from 'components/Form/RadioGroup';
import { StyledLabel } from 'components/Form/RadioButton/styled.index';
import SelectField from 'components/Form/SelectField';
import Alert from 'components/Alert';

export const StyledContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const StyledCardHeader = styled(CardHeader)`
  padding: 34px 36px;
`;

export const StyledTextH4 = styled(Text)`
  margin-bottom: 6px;
`;

export const StyledCardBody = styled(CardBody)`
  position: relative;
  max-width: 594px;
  min-height: calc(100vh - 230px - 120px - 100px);
  margin: auto;
  padding-top: 46px;
`;

export const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  top: 0;
  bottom: 0;
`;

export const StyledCardFooter = styled(CardFooter)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin-left: 16px;
  min-width: 182px;
`;

export const StyledButtonCancel = styled(Button)`
  min-width: 182px;
`;

export const StyledWrapperRadioGroup = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const StyledTextBodyLead = styled(Text)`
  margin-bottom: 16px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
`;

export const StyledLabelWrapper = styled.div`
  flex: 50%;
  margin-left: 20px;
  border: 1.5px solid var(--colors-geyser);
  border-radius: 12px;

  ${({ checked }) =>
    checked &&
    `
    background: var(--colors-linkWater);
    border-color: var(--colors-spindle);
  `}

  &:first-child {
    margin-left: 0;
  }

  ${StyledLabel} {
    padding: 16px 18px;
  }
`;

export const StyledSelectField = styled(SelectField)`
  width: 58px;
  border: none;
  background-position-x: 100%;
  font-size: 16px;
  padding: 0;
`;

export const StyledAlert = styled(Alert)`
  margin-bottom: 32px;
`;
