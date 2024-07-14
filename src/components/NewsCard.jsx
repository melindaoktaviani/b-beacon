/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const NewsCard = ({ image, title, author, date, readTime }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="grow pr-20 mt-1.5 w-full rounded-3xl bg-stone-100 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center w-full rounded-2xl bg-stone-300 max-md:mt-3.5">
              <img loading="lazy" src={image} alt={title} className="aspect-[1.11] w-[172px]" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-2 text-black max-md:mt-3.5">
              <h3 className="text-sm font-bold">{title}</h3>
              <div className="mt-10 text-xs max-md:mt-10">
                {author} . {date}
                <br />
                {readTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;