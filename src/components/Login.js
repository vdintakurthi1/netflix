import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const errorMsg = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMsg(errorMsg);

    if (errorMsg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-banner"
        />
      </div>
      <form
        className="absolute p-10 w-3/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-80"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="p-2 m-2 font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-500"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-2 m-2 w-full bg-gray-500"
        />
        <button
          className="p-2 m-2 bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 p-2 m-2">{errorMsg}</p>
        <p className="py-4 cursor-pointer p-2 m-2" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix ? Sign Up Now"
            : " Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
