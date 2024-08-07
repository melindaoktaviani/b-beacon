/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center self-stretch px-16 py-20 mt-32 w-full bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col pb-3.5 mb-5 w-full max-w-[1299px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center p-2.5 mt-5 text-4xl font-semibold text-center whitespace-nowrap text-zinc-50 max-md:mt-10">
                <div className="flex flex-col justify-center py-8">
                  <div className="flex flex-col pt-2.5 rounded-3xl">
                    <div className="justify-center px-px py-4 rounded-3xl bg-green-100 bg-opacity-0">
                      B-BEACONS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <p className="grow justify-center py-14 text-xl font-medium text-white max-md:mt-10">
                Let technology be your wing, but let your health drive you to
                grow. With FitMotion realize your healthy life in the era of
                Technology.
              </p>
            </div>
            <nav className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-4 py-1 my-auto font-medium text-white max-md:mt-10">
                <h3 className="text-2xl">COMPANY :</h3>
                <ul className="mt-4 text-base">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Articles</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <hr className="mt-24 w-full border border-white border-solid stroke-[1px] stroke-white max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-center mt-5 text-xl font-medium text-white max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">Copyright 2024 B-Beacons</div>
          <div className="flex-auto">Terms & conditions | Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
