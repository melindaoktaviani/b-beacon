/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const IconButton = ({ src, className = '' }) => (
  <div
    className={`flex justify-center items-center p-2 rounded-3xl max-md:px-5 ${className}`}
  >
    <img loading="lazy" src={src} alt="" className="aspect-square w-[72px]" />
  </div>
);

export default IconButton;
