/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="flex flex-col justify-center text-center text-black max-md:mt-10">
      <div className="flex flex-col justify-center items-center px-16 bg-white rounded-2xl aspect-square max-md:px-5">
        <div className="flex flex-col justify-center px-2.5 mx-3 max-md:mx-2.5">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="self-center aspect-square w-[43px]"
          />
          <div className="mt-3 text-4xl font-bold">{number}</div>
          <div className="mt-3 text-xl">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
