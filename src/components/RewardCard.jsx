/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const RewardCard = ({ image, title, points, validFrom, validTo }) => {
  return (
    <div className="px-14 bg-stone-300 rounded-[30px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <div className="flex z-10 gap-1.5">
              <img
                loading="lazy"
                src={image}
                alt={title}
                className="shrink-0 self-end mt-20 max-w-full aspect-[1.02] w-[180px] max-md:mt-10"
              />
              <div className="flex flex-col">
                <div className="shrink-0 rounded-full bg-[linear-gradient(0deg,#FFF_0%,#FFF_100%),linear-gradient(0deg,#FFF_0%,#FFF_100%),linear-gradient(0deg,#FFF_0%,#FFF_100%),#FFF] h-[35px]" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62b747eec118a55c1875e1e24315d015cb7f1c35f9410174d4fe1ab1ef45c70?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                  alt=""
                  className="self-center mt-2 w-1.5 border-dashed aspect-[0.02] border-[6px] border-zinc-500 stroke-[6px] stroke-zinc-500"
                />
              </div>
            </div>
            <div className="shrink-0 self-end h-9 rounded-full bg-[linear-gradient(0deg,#FFF_0%,#FFF_100%),linear-gradient(0deg,#FFF_0%,#FFF_100%),linear-gradient(0deg,#FFF_0%,#FFF_100%),#FFF] w-[70px]" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-2xl max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-semibold text-black max-md:max-w-full">
              {title}
            </div>
            <div className="mt-3 font-semibold text-stone-500 max-md:max-w-full">
              Minimal poin {points}xp
            </div>
            <div className="flex gap-5 px-0.5 mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto my-auto font-semibold text-stone-500 max-md:max-w-full">
                Berlaku mulai {validFrom} - {validTo}
              </div>
              <button className="flex flex-col justify-center px-5 py-1 font-bold whitespace-nowrap rounded-lg bg-neutral-500 text-zinc-50">
                <div className="justify-center px-5 py-2.5 max-md:px-5">
                  Tukar
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
