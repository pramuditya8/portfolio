import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <div
        className="w-full h-[calc(100vh-64px-66px)] flex justify-start"
        id="main"
      >
        <div className="w-full h-full flex items-center">
          <div className="p-5 md:p-10">
            <h1 className=" text-white text-2xl sm:text-4xl font-semibold my-auto w-full">
              Sahrul Fauzi Pramuditya
            </h1>
            <h1 className=" text-white text-base my-auto w-full">
              Javascript Developer
            </h1>
            <div className="w-full h-full flex justify-start mt-5">
              <Link to={"/portfolio"}>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Portfolio
                </button>
              </Link>
              <Link to={"/about"}>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
