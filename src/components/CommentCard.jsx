/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CommentCard = ({ avatar, name, content }) => {
return (
<div className="flex flex-col">
  <img loading="lazy" src={avatar} alt={name} className="shrink-0 rounded-full aspect-[0.85] w-[47px]" />
  
  <div className="flex flex-col mt-1.5">
    <div className="text-lg font-semibold text-black">{name}</div>
    <div className="mt-7 text-base font-light leading-6 text-justify text-neutral-700">
      {content}
    </div>
  </div>
</div>
);
};

export default CommentCard;