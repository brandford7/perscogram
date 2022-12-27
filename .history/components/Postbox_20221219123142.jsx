import React from "react";
import Useravatar from "./Useravatar";

const Postbox = () => {
  return (
    <div className="flex ">
      <Useravatar userName="Kwaku" />
      <textarea className="border border-blue-500 rounded lg:w-96 p-1 text-black"></textarea>
    </div>
  );
};

export default Postbox;
