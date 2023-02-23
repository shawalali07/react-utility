export const dateDifference = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays - years * 365) / 30);
  const days = diffDays - years * 365 - months * 30;

  const result = [];
  if (years > 0) {
    result.push(`${years} year${years === 1 ? '' : 's'}`);
  }
  if (months > 0) {
    result.push(`${months} month${months === 1 ? '' : 's'}`);
  }
  if (days > 0) {
    result.push(`${days} day${days === 1 ? '' : 's'}`);
  }
  return result.join(' ');
};
