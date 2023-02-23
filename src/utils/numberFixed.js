const numFixed = (data) => {
  if (isNaN(Number(data))) return '0.00';
  if (typeof data === 'number' && data === 0) return '0.00';
  return Number(data)?.toFixed(2) || '0.00';
};

export default numFixed;
