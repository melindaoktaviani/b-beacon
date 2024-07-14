/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import AchievementCard from './AchievementCard';

const Achievement = () => {
  const achievements = [
    { icon: "http://b.io/ext_27-", title: "Kota udara terbersih" },
    { icon: "http://b.io/ext_28-", title: "Kota pariwisata terbaik" },
    { icon: "http://b.io/ext_29-", title: "Kota inovatif & smartcity" }
  ];

  return (
    <section className="flex justify-center items-center px-16 py-20 mt-32 w-full bg-lime-900 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-10 mb-16 w-full max-w-[1149px] max-md:mb-10 max-md:max-w-full">
        <h2 className="self-center text-4xl font-semibold text-center text-black capitalize mix-blend-hard-light">
  Achievement
</h2>
<div className="flex gap-5 justify-between mt-36 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
  {achievements.map((achievement, index) => (
    <AchievementCard key={index} icon={achievement.icon} title={achievement.title} />
  ))}
</div>
</div>
</section>
);
};

export default Achievement;