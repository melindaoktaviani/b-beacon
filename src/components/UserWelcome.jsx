/* eslint-disable no-unused-vars */
import React from 'react';

const UserWelcome = () => {
  return (
    <div className="flex flex-col self-center px-10 pt-8 pb-20 mt-14 w-full bg-neutral-200 bg-opacity-50 max-w-[1327px] rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-center w-full max-w-[1169px] max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96ea1ca8d6d4ff57d7f2e8d044a59843a6c4770e648ea56ba9bb8f68a03b8a6?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                  alt="User avatar"
                  className="grow shrink-0 max-w-full aspect-[0.97] w-[188px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                <div className="self-stretch my-auto text-4xl font-semibold text-black max-md:mt-10">
                  Welcome back! <br /> Bianca Eleison
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-start px-10 py-3.5 my-auto text-4xl font-bold whitespace-nowrap rounded-3xl bg-stone-700 text-zinc-50 max-md:px-5">
            150xp
          </div>
        </div>
        <div className="mt-20 ml-9 max-w-full w-[951px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between max-md:mt-10">
                <div className="flex justify-center items-center p-7 rounded-3xl bg-stone-300 h-[124px] w-[124px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4384c07f9428a0dc9bfa2214c812bd1b5aa19b9b1fcdc6a4b7a34722882a9b?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                    alt="Your progress icon"
                    className="aspect-[1.05] w-[74px]"
                  />
                </div>
                <div className="pb-14 my-auto text-3xl font-semibold text-zinc-800">
                  Your progress
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 max-md:mt-10">
                <div className="flex justify-center items-center p-7 rounded-3xl bg-stone-300 h-[124px] w-[124px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4384c07f9428a0dc9bfa2214c812bd1b5aa19b9b1fcdc6a4b7a34722882a9b?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                    alt="Overall progress icon"
                    className="aspect-[1.05] w-[74px]"
                  />
                </div>
                <div className="pb-14 my-auto text-3xl font-semibold text-zinc-800">
                  Overall progress
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-end mt-2.5 w-[60px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc91e77760d4df8a025858c1c5f0a467b33b87ee4679a42b58fa200884eb4202?apiKey=ccf78d4ef6544615a01756b290b630ea&"
            alt="Decoration"
            className="w-full aspect-[1.25]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start py-1 mt-6 mb-9 border-4 border-solid bg-stone-300 border-white border-opacity-20 rounded-[32px] max-md:pr-5 max-md:max-w-full">
        <div className="shrink-0 bg-lime-900 h-[34px] rounded-[32px] w-[142px]" />
      </div>
    </div>
  );
};

export default UserWelcome;
