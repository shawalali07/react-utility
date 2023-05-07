export const longestWord = (str) => {
  const arr = str.split(' ');
  let longest = '';
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

export const longestWords = (str) => {
  const arr = str.split(' ');
  let size = 0;
  let longest = [''];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= size) {
      size = arr[i].length;
      if (longest[longest.length - 1].length < arr[i].length) {
        longest = [];
        longest.push(arr[i]);
      } else {
        longest = [...longest, arr[i]];
      }
    }
  }

  return [...longest];
};

export const unique = (str) => {
  let unique = [];
  for (let letter of str) {
    if (unique.indexOf(letter) !== -1) {
      return;
    }
    unique.push(letter);
  }
  return unique;
};
