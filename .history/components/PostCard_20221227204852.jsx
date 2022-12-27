import React from "react";
import Useravatar from "./Useravatar";

const Postcard = () => {
  return (
    <div className="border border-blue-500 bg-red">
      <h1>PostCard</h1>
      <section className="top flex flex-g items-center ">
        <Useravatar />
      </section>
      <section className="mid "></section>
      <section className="bottom"></section>
    </div>
  );
};

export default Postcard;
