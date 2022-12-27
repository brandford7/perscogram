import React from "react";

const Button = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-2">
          <span>{icon}</span>
      <p>{name}</p>
    </div>
  );
};

export default Button;
