// TODO: add unit tests

export const numberWithSpaces = (amount) => {
  var parts = amount.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const getCurrencySymbol = (currencyCode, locale = 'en-US') =>
  (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();
