/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ImageCard = ({ src, title, location }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-24 text-xl font-semibold text-zinc-900 max-md:mt-10">
        <img loading="lazy" src={src} alt={title} className="w-full aspect-[0.93]" />
        <div className="mt-4 ml-2.5 w-[313px]">
          <span className="text-lg font-medium text-zinc-900">{title}</span>
          <br />
          <span className="text-sm text-zinc-900">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;