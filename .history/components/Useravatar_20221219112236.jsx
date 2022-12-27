import React from "react";

const Useravatar = ({ userName, userImg }) => {
  return (
    <div>
      <img src={userImg} alt="image" />
    </div>
  );
};

export default Useravatar;
