import { randomNumberBetween } from './randomNumber';
export const firstElement = (arr, n = 1) => {
  if (n === 1) return arr[0];
  return arr?.filter((_, index) => index < n);
};

export const lastElement = (arr, n = 1) => {
  if (n === 1) return arr[arr?.length - 1];
  return arr?.filter((_, index) => arr?.length - index <= n);
};

export const sample = (arr) => {
  return arr[randomNumberBetween(0, arr?.length - 1)];
};

export const pluck = (arr, key) => {
  return arr?.map((element) => element[key]);
};

export const groupBy = (arr, key) => {
  return arr?.reduce((group, element) => {
    const keyValue = element[key];
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
  }, {});
};
