import React from "react";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="flex items-center space-x-7 h-20 w-screen shadow-md">
          <h1 className="text-blue-500 text-2xl ml-20">Perscogram</h1>
          <Searchbar/>
    </div>
  );
};

export default Header;
