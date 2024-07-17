/* eslint-disable no-unused-vars */
import React from 'react';

const ProgressBar = () => {
  return (
    <div className="flex flex-col items-start self-center py-1 mt-1 max-w-full w-[1250px] max-md:pr-5">
      <div className="flex flex-col justify-center items-start self-center py-1 mt-1 max-w-full border-4 border-solid bg-stone-300 border-white border-opacity-20 rounded-[32px] w-[1250px] max-md:pr-5">
        <div className="shrink-0 bg-lime-900 h-[34px] rounded-[32px] w-[142px]" />
      </div>
      <div className="flex gap-5 self-center px-5 mt-5 w-full font-semibold text-lime-900 max-w-[1218px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-xl">1 place done</div>
        <div className="flex-auto text-lg text-right">Goal 7 Places</div>
      </div>
    </div>
  );
};

export default ProgressBar;
