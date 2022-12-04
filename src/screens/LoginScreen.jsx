import React, { useState } from 'react';
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [sigIn, setSignIn] = useState(false);

  return (
    <div>
      <div className='relative'>
        <img
          onClick={() => setSignIn(false)}
          className=" z-[1] fixed left-0 w-[120px] object-contain pl-1 top-[2px] lg:w-[200px] cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix__logo"
        />

        <img
          className=" w-full h-screen bg-no-repeat bg-cover bg-center"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
        />
        <button
          onClick={() => setSignIn(true)}
          className=" z-[1] fixed right-5 top-5 py-[5px] px-3 text-white text-sm bg-red-600 font-semibold cursor-pointer rounded-md lg:text-2xl lg:px-6 md:py-4 lg:top-8"
        >
          Sign in
        </button>
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent" />

        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black/90" />
      </div>
      <div className=" absolute top-[15%] mx-auto p-5 text-white font-semibold text-center left-0 right-0 lg:top-[30%] ">
        {sigIn ? (
          <>
            <span
              onClick={() => setSignIn(false)}
              className="absolute right-0 xs:left-60 mm:left-72 ml:left-[350px] top-5 md:left-96 md:top-5 md:mr-5 mt-2 cursor-pointer"
            >
              X
            </span>
            <SignupScreen className='relative' />
          </>
        ) : (
          <>
            <h1 className="text-[1.7rem] md:text-[2rem] lg:text-[3rem]">
              Unlimited films, TV programmes and more.
            </h1>
            <h2 className="text-[1.2rem] font-[400] mb-[10px] md:text-[1.3rem] lg:text-[2rem]">
              Watch anywhere, Cancel at any time
            </h2>
            <h3 className="text-[1.1rem] font-[400] md:text-[1.3rem] lg:text-[2rem]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="my-5 mx-auto">
              <form>
                <input
                  className="text-black p-[10px] outline-0 h-[47px] w-full md:w-[50%] lg:w-[30%] mb-4 rounded-sm md:h-12"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="py-3 px-2 text-sm bg-red-600 cursor-pointer md:py-4"
                >
                  GET STARTED {'>'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
