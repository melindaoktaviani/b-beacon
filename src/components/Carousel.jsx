/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';

const Carousel = () => {
  return (
    <div className="flex relative gap-1 self-center mt-72 max-md:mt-10">
      {[].map((index) => (
        <img
          key={index}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b17768a2f4910596023cb0c5ca595896d04a1d19bd970bdefbacd3eb3f552a2?apiKey=ccf78d4ef6544615a01756b290b630ea&"
          alt={`Carousel indicator ${index}`}
          className="shrink-0 aspect-square fill-[linear-gradient(0deg,#9D9D9D_0%,#9D9D9D_100%),#9D9D9D] w-[13px]"
        />
      ))}
    </div>
  );
};

export default Carousel;
