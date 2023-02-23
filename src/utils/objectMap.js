const objectMap = (itemMap = new Map()) => {
  const pak = { name: 'Pakistan' };
  itemMap.set(pak, 'Rupees');
  return itemMap.get(pak);
};

export default objectMap;
