import React from 'react';

function LocationInfo() {
  return (
    <div className="mt-12 w-full max-w-[952px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between max-md:mt-10">
            <div className="flex justify-center items-center px-9 py-8 bg-violet-200 rounded-2xl h-[97px] w-[97px] max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51931684c12c42f078a9ad12300466c955dc7dcdbe7b2ebf9a816f1d3b2c0471?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="aspect-[0.83] w-[29px]" />
            </div>
            <div className="my-auto text-2xl font-semibold text-black">24 jam</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center px-8 py-7 w-full bg-orange-200 rounded-2xl max-md:px-5 max-md:mt-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e85d4c878f4fb217f4e20ded49daf60b88f96db1a493d1eae02e8034d91e20c?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="border-4 border-black border-solid aspect-square stroke-[4px] stroke-black w-[45px]" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                <div className="self-stretch my-auto text-2xl font-semibold text-black max-md:mt-10">
                  Jl. Braga Bandung, Jawa Barat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;