import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 mt-[64px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
