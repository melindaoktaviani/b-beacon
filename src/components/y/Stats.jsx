/**
 * This code was generated by Builder.io.
 */
import React from "react";
import StatCard from "./StatCard";

const Stats = () => {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2be42412020229d94bb8ca2ee478c4bd5f406a9b947077440e1e75e63f6b609?apiKey=ccf78d4ef6544615a01756b290b630ea&",
      value: "200",
      label: "Happy Travellers",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1c51afba1d4a65f428963942cb34a49146d7f46be683b9f27f7c6d1fa2bbaef?apiKey=ccf78d4ef6544615a01756b290b630ea&",
      value: "15+",
      label: "Places Visited",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae630742c806961e8ac0b70665ea8a9e47f6f4641b3d7ca305c886d8f56b5e13?apiKey=ccf78d4ef6544615a01756b290b630ea&",
      value: "2k+",
      label: "Travel History",
    },
  ];

  return (
    <section className="flex justify-center items-center self-stretch px-16 py-16 mt-52 w-full bg-lime-900 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mb-3.5 w-full max-w-[1204px] max-md:max-w-full">
        <div className="flex flex-col text-center text-black max-md:max-w-full">
          <h2 className="text-4xl font-bold max-md:max-w-full">
            We're always here for you <br /> to explore Bandung
          </h2>
          <p className="mt-9 text-base max-md:max-w-full">
            Whether you're seeking out hidden gems or immersing yourself in the
            city's rich culture and history, we're here to make <br /> every
            journey unforgettable. Let's embark on new adventures and create
            lasting memories together!
          </p>
        </div>
        <div className="self-center mt-28 w-full max-w-[1006px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;