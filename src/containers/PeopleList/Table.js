import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import { numberWithSpaces, getCurrencySymbol } from 'utils/amount';

import { StyledLink } from './styled.index';

const PeopleTable = ({ people, tBodyHeight }) => {
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
        {people.map(({ id, name, jobTitle, country, salary, currency }) => (
          <TableRow key={id}>
            <TableCell width='22.5%'>{name}</TableCell>
            <TableCell width='25.5%'>{jobTitle}</TableCell>
            <TableCell>{country}</TableCell>
            <TableCell align='right'>
              {getCurrencySymbol(currency)} {currency}{' '}
              {numberWithSpaces(salary.toFixed(2))}
            </TableCell>
            <TableCell align='right' width='17%'>
              <StyledLink to={`/employee/${id}`}>Edit</StyledLink>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

PeopleTable.defaultProps = {
  tBodyHeight: 300,
};

PeopleTable.propTypes = {
  // ** Array of people * /
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      employment: PropTypes.string.isRequired,
    })
  ).isRequired,
  // ** Height of tbody tag * /
  tBodyHeight: PropTypes.number,
};

export default PeopleTable;
