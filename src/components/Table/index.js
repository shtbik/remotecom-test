import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0;

  ${({ theme }) => theme.typography.bodySmall}

  ${({ tBodyHeight }) =>
    tBodyHeight &&
    `
      tbody {
        display: block;
        overflow: auto;
        height: ${tBodyHeight}px;

        @media screen and (max-width: 550px) {
          height: calc(100vh - 370px);
          min-height: 400px;
        }
      }

      thead,
      tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
      }
  `}

  color: var(--colors-bayoux);
  letter-spacing: 0.4px;
`;

Table.propTypes = {
  /** Property to set height of tbody tag */
  tBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const TableRow = styled.tr``;

export const TableThCell = styled.th`
  white-space: nowrap;
  padding: ${({ align }) => {
    switch (align) {
      case 'right':
        return '20px 16px 20px 0';
      case 'center':
        return '20px 16px';
      case 'left':
      default:
        return '20px 0 20px 16px';
    }
  }};
  text-align: left;
  font-size: 0.6875rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--colors-darkBlue);
  background-color: var(--colors-catskillWhite);
  text-align: ${({ align }) => align};

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
    padding-right: 16px;
  }
`;

TableThCell.defaultProps = {
  align: 'left',
};

export const TableCell = styled.td`
  height: 64px;
  padding: 8px 16px;
  border-top: 1px solid var(--colors-mischka);
  text-align: ${({ align }) => align};
  overflow-wrap: break-word;

  ${TableRow}:first-child & {
    border-top: 0;
  }

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    padding-right: 16px;
    border-radius: 0 8px 8px 0;
    border-bottom: 0;
  }
`;

TableCell.defaultProps = {
  align: 'left',
};
