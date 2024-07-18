/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import ImageGallery from '../QRCode/ImageGallery';
import ImageCard from '../QRCode/ImageCard';

function WelcomeScreen() {
  return (
    <main className="flex flex-col items-center px-20 py-16 bg-zinc-50 rounded-[80px] max-md:px-5">
      <header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0791105dd4a38b44587069b8d3e7813e490a764953dd2a9ae4bfe8d983db1d6?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
          alt=""
          className="self-end aspect-square w-[58px]"
        />
      </header>
      <section className="mt-48 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb56a437b357d29a0731c47a2c1f5374d742d3ae09607679dab23613ed53f5c7?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
          alt="Welcome illustration"
          className="max-w-full aspect-[0.94] w-[569px]"
        />
      </section>
      <section className="mt-6 text-3xl font-medium text-center text-lime-900 capitalize mix-blend-hard-light max-md:max-w-full">
        <h1>
          Hi Kyrie, Welcome to Braga City Walk
          <br />
          <span className="text-lime-900">let's enter location token</span>
        </h1>
      </section>
      <ImageGallery />
      <button className="justify-center items-center px-16 py-7 w-full text-2xl font-extrabold text-white whitespace-nowrap rounded-3xl bg-stone-500 max-w-[976px] mt-[763px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Check
      </button>
    </main>
  );
}

export default WelcomeScreen;
