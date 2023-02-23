export const formatNumber = (number) => {
  const numberFormatter = new Intl.NumberFormat(undefined);
  return numberFormatter.format(number);
};

export const formatCurrency = (number) => {
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
  });
  return currencyFormatter.format(number);
};

export const formatCompactNumber = (number) => {
  const compactNumberFormatter = new Intl.NumberFormat(undefined, {
    notation: 'compact',
  });
  return compactNumberFormatter.format(number);
};

export const formatRelativeDate = (toDate, fromDate = new Date()) => {
  const DIVISIONS = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' },
  ];
  const relativeDateFormatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: 'auto',
  });
  let duration = (toDate - fromDate) / 1000;

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return relativeDateFormatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
};
