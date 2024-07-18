/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ImageWithAlt from '../Frame/imageWithAlt';

function StatBlock({ icon, text, bgColor }) {
  return (
    <div className="flex gap-5 justify-between">
      <div
        className={`flex justify-center items-center px-8 py-7 ${bgColor} rounded-2xl max-md:px-5`}
      >
        <ImageWithAlt src={icon} className="w-10 aspect-square" alt="" />
      </div>
      <div className="my-auto text-2xl font-semibold text-black">{text}</div>
    </div>
  );
}

export default StatBlock;
