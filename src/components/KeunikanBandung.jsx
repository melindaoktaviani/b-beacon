/* eslint-disable no-unused-vars */
import React from 'react';
import FeatureCard from '../components/FeatureCard';

const KeunikanBandung = () => {
  const features = [
    {
      title: 'Tour mission',
      description: "Complete the Mission: Discover All of Bandung's Beauty",
    },
    {
      title: 'Find hidden place',
      description: "Complete the Mission: Discover All of Bandung's Beauty",
    },
    {
      title: 'Get the poin & rewards',
      description: "Complete the Mission: Discover All of Bandung's Beauty",
    },
  ];

  return (
    <section className="flex flex-col items-end pt-20 pl-20 mt-32 w-full bg-lime-900 bg-opacity-10 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center mt-16 text-4xl font-semibold text-center text-black capitalize mix-blend-hard-light max-md:mt-10">
        Keunikan Bandung
      </h2>
      <div className="mt-36 max-w-full w-[1320px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53066ec768dd2a9f33df2cdb94c1c63d26af5b4e58ced530c2ca67405a22cadb?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
        alt=""
        className="z-10 mb-0 w-40 max-w-full aspect-[0.44] max-md:mb-2.5"
      />
    </section>
  );
};

export default KeunikanBandung;
