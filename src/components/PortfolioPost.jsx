import React from "react";

export const PortfolioPost = ({ item, index, portfolios }) => {
  return (
    <div className="w-full">
      <div className="md:flex md:justify-start py-10">
        <div className="w-full md:w-[35%] ">
          <img
            className="w-full md:w-[100%] md:border-r-[1px]"
            src={item.img}
            alt=""
          />
        </div>
        <div className="mt-5 md:mt-0 md:pl-10">
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
};
