import React from 'react'
import "./Profile.css";

const Profile = () => {
    const name="Ganesh";
  const age="23";
  const country="India";
  return (
    <div className='card'>
      <h2>Name={name}</h2>
      <h3>Age={age}</h3>
      <h3>Country={country}</h3>
    </div>
  );
};

export default Profile
