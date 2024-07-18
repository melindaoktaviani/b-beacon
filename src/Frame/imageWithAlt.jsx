/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ImageWithAlt({ src, className, alt }) {
  return <img loading="lazy" src={src} className={className} alt={alt} />;
}

export default ImageWithAlt;
