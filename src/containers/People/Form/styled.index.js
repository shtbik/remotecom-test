import styled from 'styled-components';

import Container from 'components/Container';
import { CardBody, CardFooter } from 'components/Card';
import Button from 'components/Button';
import Text from 'components/Text';
import RadioGroup from 'components/Form/RadioGroup';

export const StyledContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const StyledCardBody = styled(CardBody)`
  max-width: 530px;
  margin: auto;
`;

export const StyledCardFooter = styled(CardFooter)`
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-left: 16px;
`;

export const StyledButtonCancel = styled(Button)`
  min-width: 182px;
`;

export const StyledWrapperRadioGroup = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const StyledTextBodyLead = styled(Text)`
  margin-bottom: 16px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
`;
