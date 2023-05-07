import React, { useState } from 'react';
const Demo = () => {
  const [payload, setPayload] = useState({
    id: 1,
    candnz_label: 'Metro',
    bank_label: 'Metro',
    code: 'metro',
    description: 'metro',
    config: {
      api_detail: { url: '/api/v1/metros', type: 'post', headers: [] },
      required_columns: {
        code: 'code',
        fee_code: 'some',
        fee_name: 'helo',
        gl_number: 'm',
        product_group: 'wq2',
      },
    },
  });
  const handleChange = (e, key) => {
    const { value } = e.target;
    console.log(key);

    setPayload((prevPayload) => {
      return {
        ...prevPayload,
        config: {
          ...prevPayload.config,
          required_columns: {
            ...prevPayload.config.required_columns,
            [key]: value,
          },
        },
      };
    });
  };
  const handleChangeKey = (e, key) => {
    const { value } = e.target;
    console.log(key);
    setPayload((prevPayload) => {
      return {
        ...prevPayload,
        config: {
          ...prevPayload.config,
          required_columns: {
            ...prevPayload.config.required_columns,
            [key]: key,
          },
        },
      };
    });
  };
  const handleAddClick = () => {
    setPayload((prevPayload) => {
      const newKey = `key_${
        Object.keys(prevPayload.config.required_columns).length + 1
      }`;
      return {
        ...prevPayload,
        config: {
          ...prevPayload.config,
          required_columns: {
            ...prevPayload.config.required_columns,
            [newKey]: '',
          },
        },
      };
    });
  };
  const handleRemoveClick = (key) => {
    setPayload((prevPayload) => {
      const updatedColumns = { ...prevPayload.config.required_columns };
      delete updatedColumns[key];
      return {
        ...prevPayload,
        config: { ...prevPayload.config, required_columns: updatedColumns },
      };
    });
  };
  console.log(payload);
  return (
    <>
      {' '}
      {payload?.config?.required_columns &&
        Object.entries(payload.config.required_columns).map(([key, value]) => (
          <div key={key} className='flex gap-x-10'>
            {' '}
            <input
              type='text'
              className='px-9 placeholder:text-base placeholder:text-grey-700 h-[44px] w-full rounded mb-6 border border-colors-gray_350'
              name={`key_${key}`}
              value={key}
              onChange={(e) => handleChangeKey(e, key)}
            />{' '}
            <input
              type='text'
              className='px-9 placeholder:text-base placeholder:text-grey-700 h-[44px] w-full rounded mb-6 border border-colors-gray_350'
              name={`value_${key}`}
              placeholder={value}
              value={value || ''}
              onChange={(e) => handleChange(e, key)}
            />{' '}
            <button
              className=' text-white'
              onClick={() => handleRemoveClick(key)}
            >
              {' '}
              --{' '}
              {/* <AiOutlineMinus size={50} title="remove" className="text-red-500 mt-2 my-6 cursor-pointer" /> */}{' '}
            </button>{' '}
          </div>
        ))}{' '}
      <button onClick={handleAddClick} className='flex gap-x-9'>
        {' '}
        ++{' '}
        {/* <FiPlusCircle className="text-gray-600 pb-3 pl-10 cursor-pointer hover:text-gray-800" title="Add more" size={33} /> */}{' '}
        <span className='mt-5'>Add More</span>{' '}
      </button>{' '}
    </>
  );
};
export default Demo;
