import { useEffect, useState } from 'react';
import { data, people } from './constants/data';

function App() {
  const changeData = (arr) => {
    const newData = arr.reduce((acc, curr) => {
      if (!acc[curr?.league?.name]) {
        acc[curr?.league?.name] = [curr];
      } else {
        acc[curr?.league?.name]?.push(curr);
      }
      return acc;
    }, []);
    return newData;
  };

  const newArr = changeData(people);
  console.log(newArr);
  return <div>hello</div>;
}
export default App;
