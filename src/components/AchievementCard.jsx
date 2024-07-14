/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

const AchievementCard = ({ icon, title }) => {
return (
<div className="flex flex-col justify-center text-xl font-semibold tracking-normal text-center text-black shadow-lg">
  <div className="flex flex-col px-20 py-14 bg-white rounded-3xl border-0 border-solid border-zinc-100 border-opacity-80 max-md:px-5">
    <img loading="lazy" src={icon} alt={title} className="self-center w-20 aspect-square" />
    <div className="mt-9">{title}</div>
  </div>
</div>
);
};

export default AchievementCard;