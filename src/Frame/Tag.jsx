/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Tag({ text }) {
  return (
    <div className="justify-center px-5 py-2.5 rounded-3xl bg-zinc-300">
      {text}
    </div>
  );
}

export default Tag;
