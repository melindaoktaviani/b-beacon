/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import IconButton from '../Frame/IconButton';
import Tag from '../Frame/Tags';
import InfoBox from '../Frame/InfoBox';
import ActionButton from '../Frame/ActionButton';

const GrayArtGallery = () => {
  const tags = ['Citywalk', 'street'];
  const infoBoxes = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aafbb1880fae92dfdbce78d83289afef0b7f17c053617e858649a9009e85ba0e?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      text: '75% tingkat keramaian',
      bgColor: 'bg-rose-200',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f321eeb537c6cdab87222b670ac0a4779192719415161bf3c8ce9442a37dede2?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      text: '723 liked',
      bgColor: 'bg-green-200',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51931684c12c42f078a9ad12300466c955dc7dcdbe7b2ebf9a816f1d3b2c0471?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      text: '24 jam',
      bgColor: 'bg-violet-200',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/359c4367213b2276097229c9dce61debd1db4e52e86f6e409e7eef87995d0573?apiKey=ccf78d4ef6544615a01756b290b630ea&',
      text: 'Jl. Braga Bandung, Jawa Barat',
      bgColor: 'bg-orange-200',
    },
  ];

  return (
    <main className="flex flex-col py-16 bg-white rounded-[80px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ac65b13421e128b334c6777eb9191c3c0a042d0a02a5931e717dafbe3c3fbb?apiKey=ccf78d4ef6544615a01756b290b630ea&"
        alt=""
        className="self-end mr-16 aspect-square w-[58px] max-md:mr-2.5"
      />
      <section className="flex flex-col items-center px-20 w-full mt-[810px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2.5 self-start ml-4 max-md:ml-2.5">
          <div className="flex justify-center items-center px-3.5 w-12 h-12 bg-green-100 rounded-[100px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af47830822a9af27093d7e80a1b9cf7fad54578daa1fb2dc0693e5b88006fee?apiKey=ccf78d4ef6544615a01756b290b630ea&"
              alt=""
              className="border-lime-600 border-solid aspect-[1.16] border-[7px] stroke-[7px] stroke-lime-600 w-[22px]"
            />
          </div>
          <p className="flex-auto my-auto text-2xl font-medium tracking-tight leading-5 text-lime-600">
            Hurray, we identified the code!
          </p>
        </div>
        <div className="mt-7 w-full max-w-[1002px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
              <h1 className="self-stretch my-auto text-7xl font-extrabold capitalize mix-blend-hard-light text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Gray Art Gallery
              </h1>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-0 max-md:mt-10">
                <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ffff86745e016f3ed90fa63d01453629689589b5ea8a6652eecf6b6c384299e?apiKey=ccf78d4ef6544615a01756b290b630ea&" />
                <IconButton
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b91b353ea8121dc7d75232fb36f6cba2b035ff5dd110c6b1b5c2b381a4054646?apiKey=ccf78d4ef6544615a01756b290b630ea&"
                  className="self-start mt-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-start self-start ml-7 text-2xl font-medium whitespace-nowrap text-neutral-700 max-md:ml-2.5">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="flex gap-2.5 mt-20 text-base font-semibold text-justify text-black capitalize max-md:flex-wrap max-md:mt-10">
          <div className="shrink-0 bg-lime-900 h-[92px] w-[17px]" />
          <p className="grow justify-center p-2.5 bg-gray-200 w-fit max-md:max-w-full">
            Jalan Braga adalah nama sebuah jalan utama di kota Bandung,
            Indonesia. Nama jalan ini cukup dikenal sejak masa pemerintahan
            Hindia Belanda. Sampai saat ini nama jalan tersebut tetap
            dipertahankan sebagai salah satu maskot dan objek wisata kota
            Bandung yang dahulu dikenal sebagai Parijs van Java.
          </p>
        </div>
        <p className="self-end mt-9 text-base text-justify underline capitalize text-stone-500 max-md:mr-2.5 max-md:max-w-full">
          Di sisi kanan kiri Jalan Braga terdapat komplek{' '}
          <a
            href="https://id.wikipedia.org/wiki/Toko"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            toko
          </a>{' '}
          yang memiliki{' '}
          <a
            href="https://id.wikipedia.org/wiki/Arsitektur"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            arsitektur
          </a>{' '}
          dan tata kota yang tetap mempertahankan ciri arsitektur kuno pada masa
          Hindia Belanda. Tata letak pertokoan tersebut mengikuti model yang ada
          di Eropa sesuai dengan perkembangan kota Bandung pada masa itu
          (1920-1940an) sebagai kota mode yang cukup termasyhur seperti halnya
          kota{' '}
          <a
            href="https://id.wikipedia.org/wiki/Paris"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paris
          </a>{' '}
          pada saat itu. Di antara pertokoan tersebut yang masih mempertahankan
          ciri arsitektur lama adalah pertokoan{' '}
          <a
            href="https://id.wikipedia.org/wiki/Sarinah"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sarinah
          </a>
          , Apotek{' '}
          <a
            href="https://id.wikipedia.org/wiki/Kimia_Farma"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kimia Farma
          </a>{' '}
          dan{' '}
          <a
            href="https://id.wikipedia.org/wiki/Gedung_Merdeka"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gedung Merdeka
          </a>{' '}
          (Gedung Asia Afrika yang dulunya adalah gedung Societeit Concordia).
          Model tata letak jalan dan gedung gedung pertokoan dan perkantoran
          yang berada di Jalan Braga juga terlihat pada model jalan-jalan lain
          di sekitar Jalan Braga seperti Jalan Suniaraja (dulu dikenal sebagai
          Jalan Parapatan Pompa) dan Jalan Pos Besar (Postweg)('sekarang Jalan
          Asia-Afrika') yang dibangun oleh Gubernur Jendral{' '}
          <a
            href="https://id.wikipedia.org/wiki/Herman_Willem_Daendels"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Herman Willem Daendels
          </a>{' '}
          pada tahun 1811, di depan Gedung Merdeka....{' '}
          <span className="font-semibold text-stone-500">Read more</span>
        </p>
        <div className="flex flex-col flex-wrap content-start mt-28 w-full max-w-[952px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            {infoBoxes.slice(0, 2).map((box, index) => (
              <InfoBox
                key={index}
                icon={box.icon}
                text={box.text}
                bgColor={box.bgColor}
              />
            ))}
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {infoBoxes.slice(2).map((box, index) => (
                <InfoBox
                  key={index}
                  icon={box.icon}
                  text={box.text}
                  bgColor={box.bgColor}
                />
              ))}
            </div>
          </div>
        </div>
        <ActionButton text="Get the point" />
      </section>
    </main>
  );
};

export default GrayArtGallery;
