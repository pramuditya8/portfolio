import React from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto px-4 h-16">
      {location.pathname !== "/" && (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/Mantle.jpg?alt=media&token=ec35866f-d34b-46e7-acd9-ff6db142525d"
          className="w-full h-[2px] object-fill"
        />
      )}
      <div className="w-full h-full flex items-center">
        <h1 className=" text-sm my-auto w-full">&#169;&nbsp; Pramuditya</h1>
      </div>
    </div>
  );
};
