import React from 'react';

function Header() {
  return (
    <header className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-16 w-full min-h-[925px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b20e12220c59d4459e7e25b40772b165583fd815b641138698352bcf55d10bfd?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="object-cover absolute inset-0 size-full" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6ba8103282d502a5441217dc32e0ed327aac6e3c9efd3646478a6ea7ef456eb?apiKey=91db6128330e4119a856cf6144075cfe&" alt="" className="aspect-square mb-[568px] w-[58px] max-md:mr-2 max-md:mb-10" />
    </header>
  );
}

export default Header;