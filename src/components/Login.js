import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleNewToNetflix = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="backgroundImg"
        className=""
      />
      <div className="absolute top-44 left-[37.5%] z-10 w-[25%] bg-black bg-opacity-80 flex flex-col px-16 py-16 rounded" >

        <p className="font-bold text-4xl mb-8 text-white">{ isSignInForm ? "Sign In" : "Sign Up" }</p>
        <input type="email" placeholder="Email Address" className="px-4 py-4 mb-5 border border-gray-700 rounded bg-transparent text-white"/>
        <input type="password" placeholder="Password" value="" className="px-4 py-4 mb-10 border border-gray-700 rounded bg-transparent"/>
        <button className="bg-red-700 text-white font-medium p-2 rounded mb-3">{ isSignInForm ? "Sign In" : "Sign Up" }</button>
        <div className="flex gap-2"><p className="text-gray-400">{ isSignInForm ? "New to Netflix?" : "Already have account?" }</p><button onClick={handleNewToNetflix} className="font-medium text-white">{ isSignInForm ? "Sign Up" : "Sign In" }</button></div>
      </div>
    </div>
  );
};

export default Login;
