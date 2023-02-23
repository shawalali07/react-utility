import React from 'react';

const HOCLoading = ({ children, data, loading }) => {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    data?.map((d) => <div>{children}</div>)
  );
};

export default HOCLoading;
