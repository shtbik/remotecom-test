import PropTypes from 'prop-types';

import countries from 'configs/countries';

// TODO: move currency and employment unions to configs

export const TMember = {
  id: PropTypes.number,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  country: PropTypes.oneOf([''].concat(countries)),
  salary: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.oneOf(['', 'EUR', 'USD', 'GBP']),
  employment: PropTypes.oneOf(['', 'contractor', 'employee']),
};

export const TPeopleState = {
  people: PropTypes.arrayOf(PropTypes.shape(TMember)),
  member: TMember.isRequired,
  query: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
