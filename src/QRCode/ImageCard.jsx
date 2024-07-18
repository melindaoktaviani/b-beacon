/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ImageCard({ width }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <article
        className={`shrink-0 rounded-xl shadow-sm bg-neutral-400 h-[184px] w-[${width}px]`}
        tabIndex="0"
        role="img"
        aria-label="Placeholder image"
      />
    </div>
  );
}

export default ImageCard;
