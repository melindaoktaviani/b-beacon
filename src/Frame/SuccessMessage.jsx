import React from 'react';

function SuccessMessage() {
  return (
    <div className="flex gap-2.5 self-start ml-3.5 max-md:ml-2.5">
      <div className="flex justify-center items-center px-3.5 w-12 h-12 bg-green-100 rounded-[100px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af47830822a9af27093d7e80a1b9cf7fad54578daa1fb2dc0693e5b88006fee?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="border-lime-600 border-solid aspect-[1.16] border-[7px] stroke-[7px] stroke-lime-600 w-[22px]" />
      </div>
      <div className="flex-auto my-auto text-2xl font-medium tracking-tight leading-5 text-lime-600">
        Hurray, we identified the code!
      </div>
    </div>
  );
}

export default SuccessMessage;