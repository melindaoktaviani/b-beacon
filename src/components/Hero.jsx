/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Hero = () => {
  return (
    <section className="flex relative flex-col mt-28 ml-16 max-w-full font-extrabold capitalize w-[726px] max-md:mt-10">
      <h1 className="text-7xl text-white mix-blend-hard-light max-md:max-w-full max-md:text-4xl">
        Explore Bandung, Gateway to West Java's Charms
      </h1>
      <button className="justify-center self-start px-14 py-4 text-2xl text-center text-black border border-solid shadow-sm bg-white bg-opacity-80 border-neutral-300 rounded-[30px] max-md:px-5">
        Let's Start
      </button>
    </section>
  );
};

export default Hero;
