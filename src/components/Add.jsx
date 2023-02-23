import React, { useState } from 'react';
function AddDynamicInput() {
  const [inputs, setInputs] = useState([
    { name: '', role: '', qualififcation: '' },
  ]);

  const handleChange = ({ target: { value, name } }, index) => {
    let newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const addInput = () => {
    setInputs([...inputs, { name: '', role: '', qualififcation: '' }]);
  };

  const removeInput = (index) => {
    let newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  console.log(inputs);

  return (
    <div style={{ paddingTop: '25px' }}>
      {inputs?.map((input, index) => (
        <div>
          <label>Name</label>
          <input
            onChange={(e) => handleChange(e, index)}
            name='name'
            value={input?.name}
          />
          <label>Role</label>
          <input
            onChange={(e) => handleChange(e, index)}
            name='role'
            value={input?.role}
          />
          <label>Qualification</label>
          <input
            onChange={(e) => handleChange(e, index)}
            name='qualififcation'
            value={input?.qualififcation}
          />
          <button
            onClick={() => removeInput(index)}
            style={{ backgroundColor: 'red', marginLeft: '25px' }}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        onClick={addInput}
        style={{
          backgroundColor: 'blue',
          marginLeft: '15px',
          marginTop: '15px',
        }}
      >
        Add
      </button>
    </div>
  );
}
export default AddDynamicInput;
