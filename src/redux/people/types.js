import PropTypes from 'prop-types';

import countries from 'configs/countries';

// TODO: move currency and employment unions to configs

export const TMember = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  country: PropTypes.oneOf(countries).isRequired,
  salary: PropTypes.number.isRequired,
  currency: PropTypes.oneOf(['EUR', 'USD', 'GBP']).isRequired,
  employment: PropTypes.oneOf(['contractor', 'employee']).isRequired,
};

export const TPeopleState = {
  people: PropTypes.arrayOf(PropTypes.shape(TMember)),
  member: TMember.isRequired,
  query: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
