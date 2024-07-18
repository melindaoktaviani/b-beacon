/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

function InfoBlock() {
  return (
    <>
      <div className="flex gap-2.5 mt-20 w-full text-base font-semibold text-justify text-black capitalize max-w-[986px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="shrink-0 bg-lime-900 h-[92px] w-[17px]" />
        <div className="grow justify-center p-2.5 bg-gray-200 w-fit max-md:max-w-full">
          Jalan Braga adalah nama sebuah jalan utama di kota Bandung, Indonesia.
          Nama jalan ini cukup dikenal sejak masa pemerintahan Hindia Belanda.
          Sampai saat ini nama jalan tersebut tetap dipertahankan sebagai salah
          satu maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai
          Parijs van Java.
        </div>
      </div>
      <div className="mt-9 text-base text-justify underline capitalize text-stone-500 max-md:max-w-full">
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
        Model tata letak jalan dan gedung gedung pertokoan dan perkantoran yang
        berada di Jalan Braga juga terlihat pada model jalan-jalan lain di
        sekitar Jalan Braga seperti Jalan Suniaraja (dulu dikenal sebagai Jalan
        Parapatan Pompa) dan Jalan Pos Besar (Postweg)('sekarang Jalan
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
      </div>
    </>
  );
}

export default InfoBlock;
