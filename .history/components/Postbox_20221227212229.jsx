import React from "react";
import Useravatar from "./Useravatar";

const Postbox = () => {
  return (
    <div className="flex border border-blue-500 rounded lg:w-96 p-1  text-black">
      <Useravatar />
      <textarea placeholder="Write a post" className=""></textarea>
    </div>
  );
};

export default Postbox;
