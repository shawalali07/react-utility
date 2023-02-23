import React, { useState, useEffect } from 'react';
import { people } from '../../constants/data';

function ResourceAllocation() {
  const [maxAllocation, setMaxAllocation] = useState({ name: '', hours: 8 });
  const [inputs, setInputs] = useState([{ name: '', hours: '' }]);

  const numbers = Array.from({ length: 8 }, (_, i) => i + 1);

  const onChange = ({ target: { value, name } }, index, val) => {
    let newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
    if (inputs?.filter((i) => i.name.includes(value || val)).length > 1) {
      console.log(inputs);
      const hours = inputs?.reduce(
        (acc, item, index) => {
          if (index < inputs.length - 1) {
            let totalHours = Number(item.hours);
            let maxHours = 8 - totalHours;
            acc.name = value;
            acc.hours = maxHours;
          }

          return acc;
        },
        {
          name: '',
          hours: 0,
        }
      );
      setMaxAllocation(hours);
    }
  };

  const addInput = () => {
    setInputs([...inputs, { name: '', hours: '' }]);
  };

  const removeInput = (index) => {
    let newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  console.log('inputttttttttttttttt', inputs, maxAllocation);

  return (
    <div style={{ paddingLeft: '20px' }}>
      {inputs?.map((input, index) => (
        <div
          key={input.id}
          style={{ display: 'flex', gap: '20px', padding: '20px' }}
        >
          <select name='name' onChange={(e) => onChange(e, index)}>
            {people?.map((p) => (
              <option
                value={
                  input.name && input.name === p.name ? input.name : p.name
                }
              >
                {input.name && input.name === p.name ? input.name : p.name}
              </option>
            ))}
          </select>
          <select name='hours' onChange={(e) => onChange(e, index, input.name)}>
            {Array.from({ length: maxAllocation.hours }, (_, i) => i + 1).map(
              (num) => (
                <option value={num}>{num}</option>
              )
            )}
          </select>
          <button onClick={() => removeInput(index)}>Remove Resource</button>
        </div>
      ))}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={addInput}>Add Resource</button>
      </div>
    </div>
  );
}

export default ResourceAllocation;
