import React from "react";
import Button from "./Button";
import Useravatar from "./Useravatar";

const Postcard = () => {
  return (
    <div className="border border-blue-500 bg-red rounded">
      <section className="top flex grow items-center p-2">
        <Useravatar userName='Kwasi' />
      </section>
      <section className="mid "><p className='p-2'>Hello how are you doing ?</p></section>
      <section className="bottom flex justify-between"><Button/></section>
    </div>
  );
};

export default Postcard;
