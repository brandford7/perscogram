import React from "react";

const Button = ({icon,  name }) => {
  return (
    <div className="flex space">
      <span>Icon</span>
      <p>{name}</p>
    </div>
  );
};

export default Button;
