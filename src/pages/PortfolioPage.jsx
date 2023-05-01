import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortfolios } from "../store/action/actionCreator";
import { PortfolioPost } from "../components/PortfolioPost";

export const PortfolioPage = () => {
  const { portfolios } = useSelector((state) => {
    return state.portfolios;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, []);

  return (
    <>
      <div className="w-full my-10">
        <h1 className=" text-4xl font-semibold my-auto w-full">Portfolio</h1>
        <div className="pt-3 w-full h-full">
          {portfolios.map((item, index) => {
            return (
              <PortfolioPost
                item={item}
                index={index}
                portfolios={portfolios}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
