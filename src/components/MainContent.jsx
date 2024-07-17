/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header';
import ProgressSection from './ProgressSection';
import ProgressBar from './ProgressBar';
import PlacesGrid from './PlacesGrid';
import Footer from './Footer';

const MainContent = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main>
        <ProgressSection />
        <ProgressBar />
        <div className="px-5 mt-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7b2398da6dbca9aeb97fb25b2616010535809c8b8bc549ff5fafd1d51959c3?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                alt=""
                className="shrink-0 self-stretch my-auto max-w-full aspect-[0.54] w-[295px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <PlacesGrid />
            </div>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d857702d1e570af1a3b955167dca86e4921b472910e48a5f4b8a9c8db2eabdf0?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                alt=""
                className="shrink-0 max-w-full aspect-[0.55] w-[317px]"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c3f31090922ff7f41a43003aba90fd56d36ace378708954031f51a2f43d031?apiKey=ccf78d4ef6544615a01756b290b630ea&"
          alt=""
          className="max-w-full aspect-[0.57] w-[339px]"
        />
      </main>
      <Footer />
    </div>
  );
};

export default MainContent;
