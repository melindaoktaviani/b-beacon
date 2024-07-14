import React from 'react';

function Title() {
  return (
    <div className="flex gap-5 mt-14 w-full max-w-[998px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <h1 className="flex-auto text-7xl font-extrabold capitalize mix-blend-hard-light text-neutral-900 max-md:max-w-full max-md:text-4xl">
        Jl. Braga Bandung
      </h1>
      <div className="flex gap-1.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ffff86745e016f3ed90fa63d01453629689589b5ea8a6652eecf6b6c384299e?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="shrink-0 aspect-square w-[72px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/509a710dd91fe85406ebc6afa3868b90b76ddadce3abe26fc5d2956899c18cc4?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="shrink-0 aspect-square w-[72px]" />
      </div>
    </div>
  );
}

export default Title;