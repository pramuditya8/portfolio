import React from "react";

export const AboutPage = () => {
  return (
    <>
      <div className="w-full my-10">
        <h1 className=" text-4xl font-semibold my-auto w-full">About</h1>
        <div className="w-full h-full md:flex md:justify-start ">
          <div className="pt-3 md:pr-4 w-full md:border-r-[1px]">
            <p className=" text-normal my-auto w-full">
              I'am a passionate Javascript Developer with interest in
              Application Development
            </p>
            <div className="pt-5">
              <h1 className=" text-lg font-semibold my-auto w-full">Contact</h1>
              <p className=" text-normal my-auto w-full">
                <a
                  href="https://github.com/pramuditya8"
                  className="flex justify-start items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="ml-2 border-b-[1px] border-black">
                    pramuditya8
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="pt-3 md:pl-4 w-full">
            <h1 className=" text-lg font-semibold my-auto pt-5 md:pt-0">
              Skills
            </h1>
            <div className="w-full flex justify-start">
              <div className=" w-1/2 mt-1">
                <h1 className=" text-normal font-medium my-auto w-full">
                  Frontend
                </h1>
                <p className=" text-normal my-auto w-full">- Vue</p>
                <p className=" text-normal my-auto w-full">- React</p>
              </div>
              <div className=" w-1/2">
                <h1 className=" text-normal font-medium my-auto w-full">
                  Backend
                </h1>
                <p className=" text-normal my-auto w-full">- Express</p>
                <p className=" text-normal my-auto w-full">- MongoDB</p>
                <p className=" text-normal my-auto w-full">- PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 md:pr-4 w-full">
          <div className="pt-5">
            <h1 className=" text-lg font-semibold my-auto w-full">Activity</h1>
            <h1 className=" text-normal my-auto w-full">
              My coding activity in the last 30 days based on Wakatime
            </h1>
            <div className="w-full md:w-[60%]">
              <figure>
                <embed src="https://wakatime.com/share/@195fbfcc-32f3-4e2f-8fae-32b1c5244506/a41bab67-233a-45ee-bff8-735486af7b9b.svg"></embed>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
