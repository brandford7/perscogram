import React from "react";
import Useravatar from "./Useravatar";

const Postcard = () => {
  return (
    <div className="">
      <h1>PostCard</h1>
      <section className="top flex items-center ">
        <Useravatar />
      </section>
      <section className="mid "></section>
      <section className="bottom"></section>
    </div>
  );
};

export default Postcard;
