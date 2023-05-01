import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full h-[calc(100vh-64px-66px)] flex justify-center items-center">
      <div className="flex-col text-center">
        <h1 className=" text-4xl">Page Not Found</h1>
      </div>
    </div>
  );
};
