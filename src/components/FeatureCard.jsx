/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-black max-md:mt-10">
        <div className="flex flex-col px-6 pt-20 pb-7 rounded-2xl shadow-sm bg-stone-100 max-md:px-5">
          <h3 className="mt-12 text-2xl font-bold max-md:mt-10">{title}</h3>
          <p className="mt-5 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;