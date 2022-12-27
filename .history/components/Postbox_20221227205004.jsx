import React from "react";
import Useravatar from "./Useravatar";

const Postbox = () => {
  return (
    <div className="flex ">
      <Useravatar userName="Kwaku"/>
      <textarea className=""></textarea>
    </div>
  );
};

export default Postbox;
