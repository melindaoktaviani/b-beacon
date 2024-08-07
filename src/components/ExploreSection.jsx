/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const ExploreSection = () => {
  return (
    <section className="mt-36 w-full max-w-[1166px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1faf1602d93ad5bb7b0f073f6b3bffb9b06db2587f190d64ea2e5c1803b784e?apiKey=ccf78d4ef6544615a01756b290b630ea&"
            alt="Explore Bandung"
            className="grow w-full aspect-[0.79] rounded-[37px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-5 text-stone-900 max-md:max-w-full">
              <h2 className="text-4xl font-bold max-md:max-w-full">
                Let's Explore!
              </h2>
              <p className="mt-1 text-2xl font-medium leading-10 max-md:max-w-full">
                Join us for an unforgettable journey through Bandung! From the
                iconic landmarks to the hidden gems, let's explore the heart of
                this vibrant city together.
              </p>
            </div>
            <button className="flex flex-col justify-center py-3 mt-7 max-w-full text-3xl font-medium text-center whitespace-nowrap shadow-xl text-zinc-50 w-[405px]">
              <div className="justify-center items-center p-2.5 bg-lime-900 shadow-sm rounded-[40px] max-md:px-5">
                Start
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
