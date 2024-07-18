/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ActionButton = ({ text }) => (
  <button className="justify-center items-center px-16 py-7 mt-24 w-full text-2xl font-extrabold text-white rounded-3xl bg-stone-500 max-w-[966px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    {text}
  </button>
);

export default ActionButton;
