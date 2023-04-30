import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { PortfolioPage } from "../pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
