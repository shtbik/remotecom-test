import styled from 'styled-components';

import Container from 'components/Container';
import { TextLight } from 'components/Text';
import { CardBody } from 'components/Card';
import Link from 'components/Link';
import Text from 'components/Text';

export const StyledContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledCardBody = styled(CardBody)`
  padding: calc(var(--spacer) / 2) 25px;
`;

export const StyledSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`;

export const StyledTitleComponent = styled.div`
  display: flex;
  align-items: baseline;
`;

export const StyledTextLight = styled(TextLight)`
  margin-left: 8px;
`;

export const StyledTextFieldWrapper = styled.div`
  margin-bottom: 14px;
  width: 203px;
`;

export const StyledLink = styled(Link)`
  margin-right: 16px;
`;

export const StyledTextCaption = styled(Text)`
  text-align: center;
`;

export const TableLoadingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TableLoadingInnerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--colors-blank);
`;
