/* eslint-disable no-unused-vars */
import React from 'react';
import GoogleLoginButton from '../Login/GoogleLoginButton';
import EmailLoginForm from '../Login/EmailLoginForm';
import LoginImage from '../Login/LoginImage';

function LoginPage() {
  return (
    <main className="pl-20 bg-zinc-50 rounded-[60px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">
              Login
            </h1>
            <p className="mt-7 text-xl text-black max-md:max-w-full">
              Hi, Welcome back 👋
            </p>
            <GoogleLoginButton />
            <div className="flex gap-5 items-center mt-10 font-medium text-black text-opacity-30 max-md:flex-wrap">
              <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-black bg-opacity-30 border-black border-opacity-30 w-[132px]" />
              <p className="flex-auto self-stretch">or Login with Email</p>
              <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-black bg-opacity-30 border-black border-opacity-30 w-[132px]" />
            </div>
            <EmailLoginForm />
            <p className="self-center mt-3.5 font-medium">
              <span className="text-black">Not registered yet?</span>{' '}
              <span className="text-indigo-700">Create an account</span>{' '}
              <a href="#" className="text-lime-600 underline">
                SignUp
              </a>
            </p>
          </div>
        </section>
        <LoginImage />
      </div>
    </main>
  );
}

export default LoginPage;
