import React from "react";

const Useravatar = ({ userName, userImg }) => {
  return (
    <div className='flex'>
      <img src={userImg} alt="image" />
      <h2>{userName}</h2>
    </div>
  );
};

export default Useravatar;
