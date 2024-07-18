/* eslint-disable no-unused-vars */
import React from 'react';
import TagButton from '../';


const MuseumCard = () => {
  const tags = ['History place', 'Museum'];

  return (
    <article className="flex flex-col pb-20 bg-white rounded-[80px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6e592a16d39f60b3e383116fbbbf4b4242789e93cf64bc884ee0c7763956363?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
        alt="Museum KAA"
        className="w-full aspect-[1.05] max-md:max-w-full"
      />
      <div className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-start ml-5 text-2xl font-medium text-neutral-700 max-md:ml-2.5">
          {tags.map((tag, index) => (
            <TagButton key={index} text={tag} />
          ))}
        </div>
        <div className="flex gap-2.5 mt-20 w-full text-base font-semibold text-justify text-black capitalize max-w-[986px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="shrink-0 bg-lime-900 h-[92px] w-[17px]" />
          <div className="grow justify-center p-2.5 bg-gray-200 w-fit max-md:max-w-full">
            Museum KAA, tempat sejarah Asia Afrika dikibarkan, tempat Kemitraan
            Asia Afrika ditegakkan demi masa depan yang lebih baik. Berlokasi di
            Bandung, Museum KAA memiliki sejarah sebagai tempat Konferensi Asia
            Afrika tahun 1955.
          </div>
        </div>
        <p className="mt-9 text-base text-justify underline capitalize text-stone-500 max-md:max-w-full">
          Museum Konferensi Asia Afrika adalah salah satu museum yang berada di
          kota Bandung. Museum ini didirikan pada 24 April 1980.
          <a
            href="https://id.wikipedia.org/wiki/Museum_Konferensi_Asia_Afrika#cite_note-2"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            [2]
          </a>
          Pada tanggal 18-24 April 1955, delegasi dari dua puluh sembilan negara
          menghadiri Konferensi Asia Afrika di Bandung, Indonesia. Mewakili
          Asia: Afghanistan, Burma, Kamboja, Ceylon, Republik Rakyat Tiongkok
          (RRT), India, Indonesia, Iran, Irak, Jepang, Yordania, Laos, Lebanon,
          Nepal, Pakistan, Filipina, Arab Saudi, Suriah, Thailand, Turki,
          Vietnam Utara, Vietnam Selatan, dan Yaman. Sementara dari Afrika:
          Mesir, Ethiopia, Pantai Emas, Liberia, Libya, dan Sudan. Pada tahun
          1955, hampir semua negara di Asia telah mencapai kemerdekaan, tetapi
          sebagian besar Afrika masih dijajah oleh negara-negara Eropa.{' '}
          <span className="font-semibold text-stone-500">Read more</span>
        </p>
        <button className="justify-center items-center px-16 py-7 mt-24 w-full text-2xl font-extrabold text-white rounded-3xl bg-stone-500 max-w-[966px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          Get the point
        </button>
      </div>
    </article>
  );
};

export default MuseumCard;