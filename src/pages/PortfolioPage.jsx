import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortfolios } from "../store/action/actionCreator";

export const PortfolioPage = () => {
  const { portfolios } = useSelector((state) => {
    return state.portfolios;
  });

  console.log(portfolios);

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
              <div className="w-full">
                <div className="md:flex md:justify-start py-10">
                  <div className="w-full md:w-1/2 ">
                    <img
                      className="w-full md:w-[60%] md:border-r-[1px]"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-medium w-full">{item.name}</h1>
                    <p className="text-base w-full">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="w-full border-b border-black hover:text-slate-600"
                    >
                      {item.link}
                    </a>
                  </div>
                </div>
                {index !== portfolios.length - 1 && (
                  <img
                    src="./src/assets/Mantle.jpg"
                    className="w-full h-[2px] object-fill"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
