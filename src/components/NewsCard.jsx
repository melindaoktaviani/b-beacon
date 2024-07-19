/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const NewsCard = ({ imageSrc, title, author, date, readTime }) => {
  return (
    <div className="w-full rounded-3xl bg-stone-100 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-start w-full rounded-2xl bg-stone-300 max-md:mt-3.5">
            <img
              loading="lazy"
              src={imageSrc}
              alt={title}
              className="aspect-[1.11] w-[172px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pb-1.5 text-black max-md:mt-3.5">
            <h3 className="pt-2.5 pb-16 text-sm font-bold">{title}</h3>
            <p className="text-xs">
              {author} . {date}
              <br />
              {readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
