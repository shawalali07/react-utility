const timeZone = () => {
  let date = new Date();
  let offset = date.getTimezoneOffset() / 60;
  offset = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
  }).format(offset);
  return offset;
};

export default timeZone;
