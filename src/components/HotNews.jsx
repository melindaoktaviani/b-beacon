/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import NewsCard from './NewsCard';

const HotNews = () => {
  const newsItems = [
    { image: "http://b.io/ext_24-", title: "How to Start Running: An Absolute Beginner's Guide", author: "Steven Law", date: "Oct 17, 2023", readTime: "3 mins read" },
    { image: "http://b.io/ext_24-", title: "How to Start Running: An Absolute Beginner's Guide", author: "Steven Law", date: "Oct 17, 2023", readTime: "3 mins read" },
    { image: "http://b.io/ext_25-", title: "Yoga for Beginners: What You Should Know Before Your First Class", author: "Becky Upam", date: "Oct 5, 2023", readTime: "5 mins read" },
    { image: "http://b.io/ext_25-", title: "Yoga for Beginners: What You Should Know Before Your First Class", author: "Becky Upam", date: "Oct 5, 2023", readTime: "5 mins read" },
    { image: "http://b.io/ext_26-", title: "The Best Exercises for Strengthening Every Muscle in Your Arms", author: "Karen Asp", date: "Oct 3, 2023", readTime: "4 mins read" }
  ];

  return (
    <section className="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center mt-32 text-4xl font-semibold text-center text-black capitalize mix-blend-hard-light max-md:mt-10">
        Hot News
      </h2>
      <div className="max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {newsItems.slice(0, 4).map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="pr-20 mt-7 ml-5 max-w-full rounded-3xl bg-stone-100 w-[593px] max-md:pr-5">
        <NewsCard {...newsItems[4]} />
      </div>
      <div className="self-center mt-16 text-2xl font-medium text-center capitalize mix-blend-hard-light text-neutral-700 max-md:mt-10">
        more &gt;
      </div>
    </section>
  );
};

export default HotNews;