import React from "react";
import Searchbar from "./Searchbar";
import Useravatar from "./Useravatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-20  shadow-md">
          <h1 className="text-blue-500 text-2xl ml-20">Perscogram</h1>
      <Searchbar />
      <Useravatar/>
    </div>
  );
};

export default Header;
