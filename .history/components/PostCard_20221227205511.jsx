import React from "react";
import Useravatar from "./Useravatar";

const Postcard = () => {
  return (
    <div className="border border-blue-500 bg-red rounded">
      <section className="top flex grow items-center p-">
        <Useravatar userName='Kwasi' />
      </section>
      <section className="mid "><p>Hello how are you doing ?</p></section>
      <section className="bottom"></section>
    </div>
  );
};

export default Postcard;
