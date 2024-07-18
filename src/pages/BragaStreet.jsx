/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Frame/Header';
import MainContent from '../Frame/MainContent';
import Footer from '../Frame/Footer';

function BragaStreet() {
  return (
    <div className="flex flex-col pb-20 bg-white rounded-[80px]">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default BragaStreet;
