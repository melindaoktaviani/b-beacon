import React from 'react';

function StatItem({ icon, text, bgColor, iconClass }) {
  return (
    <div className="flex gap-5 justify-between">
      <div className={`flex justify-center items-center px-8 py-7 ${bgColor} rounded-2xl max-md:px-5`}>
        <img loading="lazy" src={icon} alt="" className={`w-10 aspect-square ${iconClass || ''}`} />
      </div>
      <div className="my-auto text-2xl font-semibold text-black">{text}</div>
    </div>
  );
}

export default StatItem;