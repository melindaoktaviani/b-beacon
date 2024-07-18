/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const InfoBlocks = ({ icon, text, bgColor }) => (
  <div className="flex gap-5 justify-between">
    <div
      className={`flex justify-center items-center px-8 py-7 ${bgColor} rounded-2xl max-md:px-5`}
    >
      <img loading="lazy" src={icon} alt="" className="w-10 aspect-square" />
    </div>
    <div className="my-auto text-2xl font-semibold text-black">{text}</div>
  </div>
);

export default InfoBlocks;
