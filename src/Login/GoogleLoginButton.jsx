/* eslint-disable no-unused-vars */
import React from 'react';

function GoogleLoginButton() {
  return (
    <button className="flex justify-center items-center px-16 py-2.5 mt-7 font-semibold rounded-md bg-stone-300 text-neutral-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce26a464d492ac55217e1238af5db06ac4d30527ea354d2a5989e5626d42576c?apiKey=51e17ca80cbb458690a6b0ece463a2e0&"
          className="shrink-0 w-7 aspect-square"
          alt=""
        />
        <span className="flex-auto self-start mt-2.5">Login with Google</span>
      </div>
    </button>
  );
}

export default GoogleLoginButton;
