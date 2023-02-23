export const uniqueArrayOfObjects = (arr) => {
  const uniqueArr = [
    ...new Map(arr?.map((item) => [item['id'], item]))?.values(),
  ];

  return uniqueArr;
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

export const mutateArray = (data) => {
  const newData = data.reduce((acc, curr) => {
    const found = acc.find((a) => a.league.name === curr.league.name);
    if (!found) {
      acc.push({ ...curr, [curr.league.name]: [curr] });
    } else {
      found[curr.league.name].push(curr);
    }
    return acc;
  }, []);
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
