export const arrayDateHyphen = (date) => {
  let month = date[1]?.toString();
  let newMonth = month?.length === 1 ? '0' + month : month;
  date[1] = newMonth;
  let sortedTime = date.join('-');
  return sortedTime;
};

export const displayDate = () => {
  let currentDate = new Date();
  let currentDateISO = new Date();
  currentDate = currentDate?.toDateString(); // Thu Feb 02 2023
  currentDateISO = currentDateISO?.toISOString(); // 2023-02-02T12:26:13.858Z
  return currentDateISO;
};
