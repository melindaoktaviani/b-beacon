/* eslint-disable no-unused-vars */
import React from 'react';
import NewsCard from '../components/NewsCard';

const HotNews = () => {
  const newsItems = [
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/3744f59525d1dbb758b99a6f649932ecc086d95ea4726d43f5d2b8fbce99780d?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Jangan sampai terlewat, inilah rekomendasi tempat wisata Bandung',
      author: 'Steven Law',
      date: 'Oct 17, 2023',
      readTime: '3 mins read',
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/13896d2de3b4ae042d6a69fad1b2f8f0d492f6df0e92336bdc5f93c1beb0afb9?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Tempat wisata Bandung paling HITS',
      author: 'Steven Law',
      date: 'Oct 17, 2023',
      readTime: '3 mins read',
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/25b9aeac002f25c5bc0fca7e4ff74526d1a17f22caa2ffacff0e1daa1f903848?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: "Noah's Park tempat wisata terbaru di Bandung",
      author: 'Becky Upam',
      date: 'Oct 5, 2023',
      readTime: '5 mins read',
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/23a31c1ce0cabebe407d86e17c8b95572d3917708f761f1a82838b58fedd57a4?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Mari kenali makanan khas Bandung',
      author: 'Becky Upam',
      date: 'Oct 5, 2023',
      readTime: '5 mins read',
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7dfb5806eb4af6e585b592e018fb08435d88c75b4c31ddc2cca42d003a213163?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Keindahan alam bandung yang tidak boleh terlewat',
      author: 'Karen Asp',
      date: 'Oct 3, 2023',
      readTime: '4 mins read',
    },
  ];

  return (
    <section className="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center mt-32 text-4xl font-semibold text-center text-black capitalize mix-blend-hard-light max-md:mt-10">
        Hot News
      </h2>
      <div className="max-md:mr-2.5 max-md:max-w-full">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
      <div className="self-center mt-16 text-2xl font-medium text-center capitalize mix-blend-hard-light text-neutral-700 max-md:mt-10">
        &gt;
      </div>
    </section>
  );
};

export default HotNews;
