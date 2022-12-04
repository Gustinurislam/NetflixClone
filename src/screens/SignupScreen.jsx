import React, { useRef, useState } from 'react';
import { auth } from '../../firebase';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="max-w-[25rem] p-8 mx-auto bg-black/80">
      <form className="grid flex-col ">
        {/* <span
          onClick={() => navigate('/loginscreen')}
          className="absolute right-0 top-0 px-3 cursor-pointer"
        >
          X
        </span> */}
        <h1 className="text-left text-2xl mb-5">Sign in</h1>
        <input
          ref={emailRef}
          className="outline-0 h-10 mb-4 rounded-md py-1 px-4 text-black"
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          className="outline-0 h-10 mb-4 rounded-md py-1 px-4 text-black"
          placeholder="Password"
          type="password"
        />
        <button
          onClick={signIn}
          className="py-3 px-5 rounded-md bg-red-600 text-base font-semibold cursor-pointer mt-5"
          type="submit"
        >
          Sign in
        </button>

        <h4 className="mt-5 text-left">
          <span className="text-stone-600">New to Netflix? </span>
          <span onClick={register} className="cursor-pointer hover:underline">
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
