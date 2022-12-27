import React from "react";
import Postbox from "./Postbox";
import Postcard from "./Postcard";

const Midsection = () => {
  return (
    <div className="text-blue-600 space-y-10">
      <section>
      <Postbox/>
      </section>
      <section><Postcard/></section>
    </div>
  );
};

export default Midsection;
