import React from 'react'

const Child = ({name,age,country}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{country}</p>
    </div>
  );
};

export default Child
