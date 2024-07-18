/* eslint-disable no-unused-vars */
import React from 'react';
import ImageWithAlt from '../Frame/imageWithAlt';
import Tag from '../Frame/Tag';
import InfoBlock from '../Frame/InfoBlock';
import StatBlock from '../Frame/StatBlock';

function OrchidForest() {
  const tags = ['Citywalk', 'street'];
  const stats = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aafbb1880fae92dfdbce78d83289afef0b7f17c053617e858649a9009e85ba0e?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      text: '75% tingkat keramaian',
      bgColor: 'bg-rose-200',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f321eeb537c6cdab87222b670ac0a4779192719415161bf3c8ce9442a37dede2?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      text: '723 liked',
      bgColor: 'bg-green-200',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51931684c12c42f078a9ad12300466c955dc7dcdbe7b2ebf9a816f1d3b2c0471?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      text: '24 jam',
      bgColor: 'bg-violet-200',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/359c4367213b2276097229c9dce61debd1db4e52e86f6e409e7eef87995d0573?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      text: 'Jl. Braga Bandung, Jawa Barat',
      bgColor: 'bg-orange-200',
    },
  ];

  return (
    <article className="flex flex-col pb-20 bg-white rounded-[80px]">
      <header className="flex overflow-hidden relative flex-col px-20 pt-14 w-full min-h-[972px] max-md:px-5 max-md:max-w-full">
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99184e106f3fd1469da396906d1984466f358314d7beef4a6f45ff3c5b55cd0?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0791105dd4a38b44587069b8d3e7813e490a764953dd2a9ae4bfe8d983db1d6?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
          className="self-end aspect-square w-[58px]"
          alt=""
        />
        <div className="flex relative gap-2.5 self-start ml-4 mt-[810px] max-md:mt-10 max-md:ml-2.5">
          <div className="flex justify-center items-center px-3.5 w-12 h-12 bg-green-100 rounded-[100px]">
            <ImageWithAlt
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af47830822a9af27093d7e80a1b9cf7fad54578daa1fb2dc0693e5b88006fee?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
              className="border-lime-600 border-solid aspect-[1.16] border-[7px] stroke-[7px] stroke-lime-600 w-[22px]"
              alt=""
            />
          </div>
          <p className="flex-auto my-auto text-2xl font-medium tracking-tight leading-5 text-lime-600">
            Hurray, we identified the code!
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center px-20 mt-7 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 w-full max-w-[1002px] max-md:flex-wrap max-md:max-w-full">
          <h1 className="flex-auto self-start mt-5 text-7xl font-extrabold capitalize mix-blend-hard-light text-neutral-900 max-md:max-w-full max-md:text-4xl">
            Orchid Forest
          </h1>
          <div className="flex gap-0">
            <ImageWithAlt
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ffff86745e016f3ed90fa63d01453629689589b5ea8a6652eecf6b6c384299e?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
              className="aspect-square w-[72px]"
              alt=""
            />
            <ImageWithAlt
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01e8da1537c80dde09b63949e2d5ffd0493b0a56212da32829a6a917d605bf0a?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
              className="aspect-square w-[72px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-5 items-start self-start ml-7 text-2xl font-medium whitespace-nowrap text-neutral-700 max-md:ml-2.5">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>

        <InfoBlock />

        <section className="flex flex-col flex-wrap content-start mt-28 w-full max-w-[952px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            {stats.slice(0, 2).map((stat, index) => (
              <StatBlock
                key={index}
                icon={stat.icon}
                text={stat.text}
                bgColor={stat.bgColor}
              />
            ))}
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {stats.slice(2).map((stat, index) => (
                <StatBlock
                  key={index}
                  icon={stat.icon}
                  text={stat.text}
                  bgColor={stat.bgColor}
                />
              ))}
            </div>
          </div>
        </section>

        <button className="justify-center items-center px-16 py-7 mt-24 w-full text-2xl font-extrabold text-white rounded-3xl bg-stone-500 max-w-[966px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          Get the point
        </button>
      </main>
    </article>
  );
}

export default OrchidForest;
