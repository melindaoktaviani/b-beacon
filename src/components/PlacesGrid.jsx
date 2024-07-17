/* eslint-disable no-unused-vars */
import React from 'react';
import PlaceCard from './PlaceCard';

const placesData = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1b0b17af16c0a94bad883212912af2c9f58053efaa4db69413be77f629ddc120?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Braga City Walk',
    xp: '90xp',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/507127a2a5ff1da1f3fb6203905cc9859782e126576550461251e1c5c3b57c1d?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Grey Art Gallery',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/611de867f545cf7b5a3141606a1b38e9b1a54d669a953a1ab9a783aafacacadd?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Muesum Asia Afrika',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/67a7ecf19cd0cc48ebe16a3d787bb3de6599ca8b90847d04a9de1e940e492247?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'The Centre Of Bandung 0 Km Monuments',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5eef770a842ce29d768ed2550cdb5ec0b99a7d00360700d22973ab116febc34d?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Alun - Alun Bandung',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6439833563bc8dc1e7048e089d0da8f152f04f65a2ae78bc2b5a8388eff98ca4?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Gedung Gas Negara',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/10dcf67831d46508e732b9ef8ae970ab79fffa6fac4f26af0ac0d5b0843dc377?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Taman Balai Kota Bandung',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/c878c68ee9d751344cbfd7aac3a9feeefadcfd5c58dd3685b8aa5c644058d7c5?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Pesta Seni Braga',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/963b95b3b56f20a4e8f6b092f3341da2b0f27894cab013cc4ae2c923774344f4?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Braga Permai',
  },
];

const PlacesGrid = () => {
  return (
    <div className="flex z-10 grow justify-center items-center px-16 py-20 mt-36 w-full bg-zinc-300 bg-opacity-80 rounded-[80px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-32 max-w-full w-[870px] max-md:mt-10">
        {[...Array(Math.ceil(placesData.length / 2))].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`mt-20 max-md:mt-10 ${rowIndex === 0 ? '' : 'max-md:mr-2.5'} max-md:max-w-full`}
          >
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {placesData
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((place, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                  >
                    <PlaceCard {...place} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesGrid;
