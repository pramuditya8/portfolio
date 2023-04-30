import React from "react";

export const Footer = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto px-4 h-16">
      <img
        src="./src/assets/Mantle.jpg"
        className="w-full h-[2px] object-fill"
      />
      <div className="w-full h-full flex items-center">
        <h1 className=" text-sm my-auto w-full">&#169;&nbsp; Pramuditya</h1>
      </div>
    </div>
  );
};
