import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center  py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-600">&lt;</span>
          <span>Pass</span>
          <span className="text-green-600">OP/&gt;</span>
        </div>
        <div>
          <button className="text-white bg-green-600 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1">
            <img
              className="invert  w-10 p-1"
              src="/icons/github.svg"
              alt="github logo"
            />
            <span className="font-bold px-2">GitHub</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
