import { useState } from 'react';
import CountryItem from './CountryItem';

const Countries = () => {
  const cc = ['us', 'un', 'in', 'pk', 'ae'];

  return (
    <div className='countries'>
      <h3 style={{ textAlign: 'center' }}>Countries</h3>
      <ul className='countryUl'>
        {cc?.map((c) => (
          <CountryItem c={c} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
