import React from 'react'; 
import Header from '../BragaStreet/Header';
import MainContent from '../BragaStreet/MainContent';
import Footer from '../BragaStreet/Footer';

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