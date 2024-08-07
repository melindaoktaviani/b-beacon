/* eslint-disable no-unused-vars */
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
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
    <section className="px-5 mt-24 w-full max-w-[1228px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold text-center text-black mb-10">
        Our Services
      </h2>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
