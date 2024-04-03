import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIN, setIsSignIn] = useState(true);

  const toggleSignIN = () => {
    setIsSignIn(!isSignIN);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="bg-black absolute w-3/12 p-12 mx-auto right-0 left-0 my-44 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold pb-4">
          {isSignIN ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIN && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email Addreess"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIN ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIN}>
          {isSignIN
            ? " InNew to Netflix? Sign Up now"
            : "Already User, Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
