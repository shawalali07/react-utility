import { useEffect, useRef, useState } from 'react';

const Checkbox = () => {
  const [select, setSelect] = useState({
    option1: null,
    option2: null,
    option3: null,
  });

  const prevSelectRef = useRef(select);

  const fun1 = () => {
    console.log('function1111111');
  };

  const fun2 = () => {
    console.log('function22222');
  };

  const fun3 = () => {
    console.log('function333333');
  };

  const obj = {
    option1: fun1,
    option2: fun2,
    option3: fun3,
  };

  useEffect(() => {
    const prevSelect = prevSelectRef.current;
    for (const key in select) {
      if (select[key] && !prevSelect[key]) {
        obj[key]();
      }
    }
    prevSelectRef.current = select;
  }, [select]);

  const onChange = ({ target: { name } }) => {
    setSelect({ ...select, [name]: !select[name] });
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      className='app'
    >
      <input
        onChange={(e) => onChange(e)}
        name='option1'
        value={select.option1}
        type='checkbox'
      />
      <input
        onChange={(e) => onChange(e)}
        name='option2'
        value={select.option2}
        type='checkbox'
      />
      <input
        onChange={(e) => onChange(e)}
        name='option3'
        value={select.option3}
        type='checkbox'
      />
    </div>
  );
};

export default Checkbox;
