export const uniqueSimpleArraySet = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
};

export const uniqueSimpleArrayFilter = (arr) => {
  const uniqueArr = arr.filter((name, index) => arr.indexOf(name) === index);
  return uniqueArr;
};

export const uniqueArrayOfObjects = (arr) => {
  const uniqueArr = [
    ...new Map(arr?.map((item) => [item['id'], item]))?.values(),
  ];
  return uniqueArr;
};

export const uniqueArrayOfObjectsReduce1 = (arr) => {
  const uniqueNames = arr.reduce((acc, curr) => {
    if (acc.findIndex((obj) => obj.id === curr.id) === -1) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return uniqueNames;
};

export const mutateArrayLoop = (arr) => {
  const newData = {};
  for (const index in arr) {
    if (!newData[arr[index]?.league?.name]) {
      newData[arr[index]?.league?.name] = [arr[index]];
    } else {
      newData[arr[index]?.league?.name]?.push(arr[index]);
    }
  }
  return newData;
};

export const mutateArray = (arr) => {
  const newData = arr.reduce((acc, curr) => {
    if (!acc[curr?.league?.name]) {
      acc[curr?.league?.name] = [curr];
    } else {
      acc[curr?.league?.name]?.push(curr);
    }
    return acc;
  }, {});
  return newData;
};

export const uniqueArrayOfObjectsReduce = (arr) => {
  const uniquePeople = Object.values(
    arr.reduce((acc, person) => {
      acc[person.name] = acc[person.name] || person;
      return acc;
    }, {})
  );
  return uniquePeople;
};
