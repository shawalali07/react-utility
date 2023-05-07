const allow = true;
export const useStatus = () => {
  // if (!allow) {
  //   alert('Sorry you are not allowed');
  // } else {
  //   callback();
  // }
  const reCheck = (callback) => {
    if (!allow) return alert('Sorry you are not allowed');
    callback();
  };

  return { reCheck };
};
