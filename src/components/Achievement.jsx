/* eslint-disable no-unused-vars */
import React from 'react';
import AchievementCard from '../components/AchievementCard';

const Achievement = () => {
  const achievements = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88f9b1e607e455aebde3286eeb5b7a462cbe7d72abff0b99272bcce42ee8c6af?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Kota udara terbersih',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20a9f98cf6ab4240f5696d9ee31a6a6f140b0554dea53d10a99df494f36e8e41?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Kota makanan terenak',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/93ff072d895989197e19911e2f1c9bbfd5e9b008ed77050919e13afbb437fb85?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Kota pariwisata terbaik',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e93017f42493d0d8ff41acbf680f0999e41c3c3ad1c10b133641d261b0a6f8bf?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Kota inovatif & smartcity',
    },
  ];

  return (
    <section className="flex justify-center items-center px-16 py-20 mt-32 w-full bg-lime-900 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-10 mb-16 w-full max-w-[1149px] max-md:mb-10 max-md:max-w-full">
        <h2 className="self-center text-4xl font-semibold text-center text-black capitalize mix-blend-hard-light">
          Achievement
        </h2>
        <div className="mt-36 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                icon={achievement.icon}
                title={achievement.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
