/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../components/Header';
import UserWelcome from '../components/UserWelcome';
import RewardsList from '../components/RewardsList';
import Footer from '../components/Footer';

const Redeem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <UserWelcome />
        <div className="relative overflow-hidden mt-28 max-w-[1298px] mx-auto">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <RewardsList />
            <RewardsList />
            <RewardsList />
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          >
            &gt;
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Redeem;
