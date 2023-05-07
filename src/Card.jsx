import React from 'react';

const Card = ({ name, setAgree }) => {
  const handleAgree = (name) => {
    setAgree((prev) => {
      if (prev?.filter(({ id }) => id === name.id).length) {
        return prev?.filter(({ id }) => id !== name.id);
      } else {
        return [...prev, name];
      }
    });
  };
  return (
    <div style={{ padding: '10px' }} onClick={() => handleAgree(name)}>
      {name?.name}
    </div>
  );
};

export default Card;
