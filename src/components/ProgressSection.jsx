/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProgressSection = () => {
  return (
    <section className="flex flex-col self-center mt-24 w-full max-w-[1056px] max-md:mt-10 max-md:max-w-full">
      <div className="z-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6094fcd44c72c64c74559c9e3273048ace53b79d844d5ecbcb57afbe57fa17d?apiKey=ccf78d4ef6544615a01756b290b630ea&"
              alt="Progress illustration"
              className="w-full aspect-[1.06] rounded-[500px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-20 mt-12 text-lime-900 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                You're off to a great start!
              </h2>
              <p className="pb-20 mt-3 text-3xl font-medium max-md:max-w-full">
                Places left to win
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d38d8eb8771454f5580e7b299bf063a81d89b83ed7069972453cf57fb6f7ec5d?apiKey=ccf78d4ef6544615a01756b290b630ea&"
        alt=""
        className="self-end -mt-6 mr-6 max-w-full aspect-[1.72] w-[115px] max-md:mr-2.5"
      />
    </section>
  );
};

export default ProgressSection;
