/* eslint-disable no-unused-vars */
import React from 'react';

function EmailLoginForm() {
  return (
    <form>
      <label
        htmlFor="email"
        className="mt-7 text-lg font-semibold text-black max-md:max-w-full"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email id"
        className="justify-center items-start px-6 py-4 mt-6 font-medium rounded-md bg-stone-300 text-black text-opacity-30 max-md:px-5 max-md:max-w-full w-full"
      />
      <label
        htmlFor="password"
        className="mt-6 text-lg font-semibold text-black max-md:max-w-full block"
      >
        Password
      </label>
      <div className="flex gap-5 px-6 py-2.5 mt-5 font-medium rounded-md bg-stone-300 text-black text-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="flex-auto my-auto bg-transparent border-none outline-none"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02a0886c9a534a4d6f0fd499cedc5b31cb99e1835729cb40e46b7d1ac4ab516?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
          className="shrink-0 aspect-square w-[29px]"
          alt=""
        />
      </div>
      <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
        <label className="flex flex-1 gap-2.5 font-medium text-black">
          <input
            type="checkbox"
            className="shrink-0 bg-white rounded-sm border-0 border-solid border-black border-opacity-50 h-[18px] w-[18px]"
          />
          <span className="flex-auto my-auto">Remember Me</span>
        </label>
        <a href="#" className="flex-auto font-semibold text-indigo-700">
          Forgot Password?
        </a>
      </div>
      <button
        type="submit"
        className="justify-center items-center px-16 py-3.5 mt-10 text-xl font-medium text-white whitespace-nowrap bg-lime-900 rounded-md max-md:px-5 max-md:max-w-full w-full"
      >
        Login
      </button>
    </form>
  );
}

export default EmailLoginForm;
