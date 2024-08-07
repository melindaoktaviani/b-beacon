/* eslint-disable no-unused-vars */
import React from 'react';

const PopularDestinations = () => {
  return (
    <section className="mt-40 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold text-center text-black mb-16">
        Our Popular Destinations
      </h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/410623ffe81c3fcafe1fd11162f0f7220fd917b21ade822893bf320edbfb2165?apiKey=ccf78d4ef6544615a01756b290b630ea&"
        alt="Popular destinations in Bandung"
        className="w-full aspect-[1.79] max-w-[1404px] max-md:max-w-full"
      />
    </section>
  );
};

export default PopularDestinations;
