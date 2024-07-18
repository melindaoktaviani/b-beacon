/* eslint-disable no-unused-vars */
import React from 'react';
import InfoCard from '../Frame/InfoBox';

const Dashboard = () => {
  const infoCards = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aafbb1880fae92dfdbce78d83289afef0b7f17c053617e858649a9009e85ba0e?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      bgColor: 'bg-rose-200',
      text: '31% tingkat keramaian',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f321eeb537c6cdab87222b670ac0a4779192719415161bf3c8ce9442a37dede2?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      bgColor: 'bg-green-200',
      text: '234 liked',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51931684c12c42f078a9ad12300466c955dc7dcdbe7b2ebf9a816f1d3b2c0471?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      bgColor: 'bg-violet-200',
      text: '09.00 - 12.00',
      additionalText: '12.00 - 15.00',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/359c4367213b2276097229c9dce61debd1db4e52e86f6e409e7eef87995d0573?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      bgColor: 'bg-orange-200',
      text: 'Jl. Asia Afrika No.65, Braga',
    },
  ];

  return (
    <main className="flex flex-col flex-wrap content-start max-w-[952px]">
      <section className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
        <InfoCard {...infoCards[0]} />
        <InfoCard {...infoCards[1]} />
      </section>
      <section className="mt-12 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <InfoCard {...infoCards[2]} />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-8 py-7 w-full bg-orange-200 rounded-2xl max-md:px-5 max-md:mt-5">
                    <img
                      loading="lazy"
                      src={infoCards[3].icon}
                      alt=""
                      className="border-4 border-black border-solid aspect-square stroke-[4px] stroke-black w-[45px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                  <div className="self-stretch my-auto text-2xl font-semibold text-black max-md:mt-10">
                    {infoCards[3].text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
