import React from 'react';
import PropTypes from 'prop-types';

import { numberWithSpaces, getCurrencySymbol } from 'utils/amount';
import { TMember } from 'redux/people/types';
import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import LoadingLogo from 'components/LoadingLogo';

import {
  StyledLink,
  StyledTextCaption,
  TableLoadingWrapper,
  TableLoadingInnerWrapper,
} from './styled.index';

const PeopleTable = ({ people, tBodyHeight, loading, error }) => {
  return (
    <Table tBodyHeight={tBodyHeight}>
      <thead>
        <tr>
          <TableThCell width='22.5%'>Name</TableThCell>
          <TableThCell width='25.5%'>Type</TableThCell>
          <TableThCell>Country</TableThCell>
          <TableThCell align='right'>Salary</TableThCell>
          <TableThCell align='right' width='17%' />
        </tr>
      </thead>
      <tbody>
        {/* TODO: need to add a handler for error in UI (from figma) */}
        {loading || error ? (
          <TableLoadingWrapper as='tr'>
            <TableLoadingInnerWrapper as='td'>
              <LoadingLogo />
            </TableLoadingInnerWrapper>
          </TableLoadingWrapper>
        ) : !people.length ? (
          <TableRow>
            <TableCell>
              <StyledTextCaption as='p'>There is no data</StyledTextCaption>
            </TableCell>
          </TableRow>
        ) : (
          people.map(({ id, name, jobTitle, country, salary, currency }) => (
            <TableRow key={id}>
              <TableCell width='22.5%'>{name}</TableCell>
              <TableCell width='25.5%'>{jobTitle}</TableCell>
              <TableCell>{country}</TableCell>
              <TableCell align='right'>
                {getCurrencySymbol(currency)} {currency}{' '}
                {numberWithSpaces(salary.toFixed(2))}
              </TableCell>
              <TableCell align='right' width='17%'>
                <StyledLink to={`/people/edit/${id}`}>Edit</StyledLink>
              </TableCell>
            </TableRow>
          ))
        )}
      </tbody>
    </Table>
  );
};

PeopleTable.defaultProps = {
  people: [],
  tBodyHeight: 300,
  loading: false,
  error: false,
};

PeopleTable.propTypes = {
  /** Array of people */
  people: PropTypes.arrayOf(PropTypes.shape(TMember)),
  /** Height of tbody tag */
  tBodyHeight: PropTypes.number,
  /** State of loading */
  loading: PropTypes.bool,
  /** State of error */
  error: PropTypes.bool,
};

export default PeopleTable;
