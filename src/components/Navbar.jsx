import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to={"/"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/icon.png?alt=media&token=39715416-2bb5-4e79-8dc0-ac7616ef4cee"
              class="h-8 mr-3"
            />
          </NavLink>
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className=" float-right inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to={"/portfolio"}
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          {location.pathname !== "/" && (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/Mantle.jpg?alt=media&token=ec35866f-d34b-46e7-acd9-ff6db142525d"
              className="w-full h-[2px] object-fill"
            />
          )}
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full"
        aria-label="Sidebar"
      >
        <div className="h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            type="button"
            data-drawer-hide="logo-sidebar"
            aria-controls="logo-sidebar"
          >
            <NavLink
              to={"/"}
              className="flex items-center md:w-[12rem] w-[10rem] border-b-[1px] pb-4 border-black"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/icon.png?alt=media&token=39715416-2bb5-4e79-8dc0-ac7616ef4cee"
                className="h-8 mr-3"
              />
            </NavLink>
          </button>
          <ul className="space-y-2 font-medium mt-4">
            <li>
              <button
                type="button"
                data-drawer-hide="logo-sidebar"
                aria-controls="logo-sidebar"
              >
                <NavLink
                  to={"/portfolio"}
                  className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>Portfolio</span>
                </NavLink>
              </button>
            </li>
            <li>
              <button
                type="button"
                data-drawer-hide="logo-sidebar"
                aria-controls="logo-sidebar"
              >
                <NavLink
                  to={"/about"}
                  className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>About</span>
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
