/* eslint-disable no-unused-vars */
import React from 'react';

const imageData = [
  { id: 1, className: 'w-[107px]' },
  { id: 2, className: 'w-[108px]' },
  { id: 3, className: 'w-[108px]' },
  { id: 4, className: 'w-[107px]' },
  { id: 5, className: 'w-[108px]' },
  { id: 6, className: 'w-[107px]' },
];

function ImageGallery() {
  return (
    <div className="flex gap-5 justify-between self-end pr-20 mt-20 max-md:flex-wrap max-md:pr-5 max-md:mt-10">
      {imageData.map((image) => (
        <div
          key={image.id}
          className={`shrink-0 rounded-xl shadow-sm bg-neutral-400 h-[184px] ${image.className}`}
          role="img"
          aria-label={`Gallery image ${image.id}`}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
