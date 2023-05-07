import React from 'react';

function FilteredArraysCheck() {
  const arr1 = [{ name: 'shawal' }, { name: 'ali' }];
  const arr2 = [
    { isValid: false },
    { isValid: true },
    { isValid: false },
    { isValid: true },
  ];

  // Filter arr1 based on arr2's isValid value
  const filteredArr = arr1.filter(
    (item, index) => arr2[index].isValid === true
  );

  return (
    <div>
      {filteredArr.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
}
