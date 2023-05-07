import { useState } from 'react';
import { DropdownIcon } from '../DropwdownIcon';

const CountryItem = ({ c }) => {
  const countryNames = {
    pk: { name: 'Pakistan', type: 'Islamic Republic' },
    us: { name: 'United States', type: 'Democrates Republic' },
    in: { name: 'India', type: 'Hindu Republic' },
    ae: { name: 'United Arab', type: 'Islamic Democratic' },
    un: { name: 'United Nation', type: 'United Social' },
  };

  const [show, setShow] = useState('');

  const handleDropdown = (name) => {
    if (show === name) {
      return setShow('');
    }
    setShow(name);
  };

  return (
    <div>
      <div className='countryItem'>
        <div className='left'>
          <span className={`flag-icon flag-icon-${c}`}></span>
          <li style={{ listStyle: 'none' }}>{countryNames[c].name}</li>
        </div>
        <div className='right'>
          <DropdownIcon onClick={() => handleDropdown(c)} rotate={show === c} />
        </div>
      </div>
      {show === c && (
        <div className='dropdownField'>
          <p>{countryNames[c].type}</p>
        </div>
      )}
    </div>
  );
};

export default CountryItem;
