/* eslint-disable no-unused-vars */
import React from 'react';
import StatCard from './StatCard';

const Stats = () => {
  const stats = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2be42412020229d94bb8ca2ee478c4bd5f406a9b947077440e1e75e63f6b609?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      number: '200',
      label: 'Happy\nTravellers',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1c51afba1d4a65f428963942cb34a49146d7f46be683b9f27f7c6d1fa2bbaef?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      number: '15+',
      label: 'Places Visited',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae630742c806961e8ac0b70665ea8a9e47f6f4641b3d7ca305c886d8f56b5e13?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      number: '2k+',
      label: 'Travel History',
    },
  ];

  return (
    <section className="self-center mt-28 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
          >
            <StatCard
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
