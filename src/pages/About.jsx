/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../components/Header';
import AboutBandung from '../components/AboutBandung';
import KeunikanBandung from '../components/KeunikanBandung';
import HotNews from '../components/HotNews';
import Achievement from '../components/Achievement';
import Comment from '../components/Comment';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main>
        <h1 className="self-center mt-48 text-7xl font-semibold text-center text-black capitalize mix-blend-hard-light max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          About Bandung
        </h1>
        <AboutBandung />
        <KeunikanBandung />
        <HotNews />
        <Achievement />
        <Comment />
      </main>
      <Footer />
    </div>
  );
};

export default About;
