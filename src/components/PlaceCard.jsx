/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const PlaceCard = ({ imageSrc, title, xp }) => {
  return (
    <div className="flex flex-col grow px-7 py-11 w-full text-lg font-semibold leading-5 text-center bg-zinc-400 rounded-[30px] text-black text-opacity-60 max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="w-full aspect-[1.11]"
      />
      <div className="self-center mt-11 w-[310px] max-md:mt-10">
        {title} <br />
        {xp && <span className="text-black">{xp}</span>}
      </div>
    </div>
  );
};

export default PlaceCard;
