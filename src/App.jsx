import { useEffect, useState } from 'react';
import ImageFallback from './components/hoc/ImageFallback';
import ResourceAllocation from './components/hoc/Resource';
import { cart, people } from './constants/data';
import { nothing } from './utils/programs';

function App() {
  let count = 4;
  const checkConditions = () => {
    debugger;
    if (count === 1) {
      debugger;
      console.log('count 1');
    } else if (count === 2) {
      debugger;
      console.log('count 2');
    } else if (count === 3) {
      debugger;
      console.log('count 3');
    } else {
      debugger;
      console.log('else');
    }
  };

  checkConditions();

  return <div className='app'>React Hooks</div>;
}
export default App;
