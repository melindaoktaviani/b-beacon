import React from 'react';
import SuccessMessage from './SuccessMessage';
import Title from './Title';
import Tags from './Tags';
import Description from './Description';
import Statistics from './Statistics';
import LocationInfo from './LocationInfo';

function MainContent() {
  return (
    <main className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
      <SuccessMessage />
      <Title />
      <Tags />
      <Description />
      <Statistics />
      <LocationInfo />
      <button className="justify-center items-center px-16 py-7 mt-24 w-full text-2xl font-extrabold text-white rounded-3xl bg-stone-500 max-w-[966px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Get the point
      </button>
    </main>
  );
}

export default MainContent;