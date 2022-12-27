import React from "react";

const Button = ({ icon, name }) => {
  return (
    <div className="flex  space-x-2">
      <span></span>
      <p>{name}</p>
    </div>
  );
};

export default Button;
