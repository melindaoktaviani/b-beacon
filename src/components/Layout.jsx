/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-zinc-50">
      <div className="flex overflow-hidden relative flex-col self-stretch px-10 py-14 w-full min-h-[1025px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80ce1556baa823542d47c0d313f1efdf1a5444e4b51595eb356535d39912955f?apiKey=ccf78d4ef6544615a01756b290b630ea&"
          alt="Background"
          className="object-cover absolute inset-0 w-auto max-h-[1474px]"
        />
        <div className="relative z-10"></div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
