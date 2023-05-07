import React from 'react';

const withStyle = (Component) => {
  const WithStyle = () => {
    return (
      <div
        style={{
          backgroundColor: 'red',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      >
        <Component />
      </div>
    );
  };
  return WithStyle;
};

export default withStyle;
