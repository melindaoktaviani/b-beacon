/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from './Carousel';
import SearchIcon from './SearchIcon';
import ProfileIcon from './ProfileIcon';

const Header = () => {
  return (
    <header
      className="flex relative gap-5 justify-between items-center w-full max-md:flex-wrap max-md:max-w-full"
      style={{ backgroundColor: '#DBD5D5' }}
    >
      <div className="flex gap-3.5 self-stretch font-medium whitespace-nowrap">
        <div className="justify-center items-center px-2.5 text-3xl text-black bg-white h-[46px] rounded-[100px] w-[46px]">
          B.
        </div>
        <div className="flex-auto my-auto text-5xl text-white max-md:text-4xl">
          B-Beacons
        </div>
      </div>
      <nav className="flex gap-5 self-stretch my-auto text-2xl font-semibold text-white max-md:flex-wrap max-md:max-w-full">
        <a href="home" className="grow my-auto">
          Home
        </a>
        <a href="about" className="my-auto">
          About
        </a>
        <a href="explore" className="my-auto">
          Explore
        </a>
        <a href="redeem" className="flex-auto my-auto">
          Point Redeem
        </a>
      </nav>
      <div className="flex gap-5 items-start self-stretch my-auto">
        <div className="flex flex-col grow shrink-0 justify-center items-end px-16 py-2.5 rounded-3xl border border-gray-200 border-solid shadow-sm basis-0 bg-white bg-opacity-50 w-fit max-md:px-5">
          <SearchIcon />
        </div>
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
