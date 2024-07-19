/* eslint-disable no-unused-vars */
import React from 'react';
import ImageCard from '../components/ImageCard';

const AboutBandung = () => {
  const images = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e4fecdde9bc9721d87497a114a5fdfd8605680c4e990d9e9b86e2927e4a7569a?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Gedung Merdeka',
      location: 'Bandung',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b216176db58e6a05e622a5ebc1263792d887f4c521b657fe82607d44d1a26db5?apiKey=51e17ca80cbb458690a6b0ece463a2e0&',
      title: 'Gedung Merdeka',
      location: 'Bandung',
    },
  ];

  return (
    <section className="self-center mt-44 w-full max-w-[1174px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="mt-3.5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {images.map((image, index) => (
                <ImageCard
                  key={index}
                  src={image.src}
                  title={image.title}
                  location={image.location}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <p className="text-lg font-medium leading-8 text-slate-700 max-md:mt-10 max-md:max-w-full">
            <span className="text-slate-700">HRLink</span> was established in
            2009 as a U.S.-based software development & consulting company with
            development centers in Vietnam.
            <br />
            Besides providing outsourcing services, HRLink has built and
            successfully launched its own software companies. The most notable
            companies with millions of users worldwide.
            <br />
            HRLink is reliable, secure, and backed by a team of HR experts with
            a proven track record of developing high-quality technology
            solutions.
            <br />
            With the growing size of many startups and SME companies and the
            increasing complexity of HR regulations and employee expectations,
            manual HR processes can become time-consuming, error-prone, and
            difficult to manage. HR management software provides a centralized
            platform for storing and automating HR processes to offer more free
            time for HR staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBandung;
