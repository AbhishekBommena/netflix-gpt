import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFields } from "../utils/validateFields";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNewToNetflix = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignInOrSignUp = () => {
    setErrorMsg(validateFields(email.current.value, password.current.value));
    if (errorMsg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="backgroundImg"
        className=""
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-44 left-[37.5%] border z-10 w-[25%] bg-black bg-opacity-80 flex flex-col px-16 py-16 rounded"
      >
        <p className="font-bold text-4xl mb-8 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="px-4 py-4 mb-5 border border-gray-700 rounded bg-transparent text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="px-4 py-4 mb-5 border border-gray-700 rounded bg-transparent text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-4 mb-2 border border-gray-700 rounded bg-transparent text-white"
        />
        <p className="text-red-700 mb-10">{errorMsg}</p>
        <button
          className="bg-red-700 text-white font-medium p-2 rounded mb-3"
          onClick={handleSignInOrSignUp}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex gap-2">
          <p className="text-gray-400">
            {isSignInForm ? "New to Netflix?" : "Already have account?"}
          </p>
          <button
            onClick={handleNewToNetflix}
            className="font-medium text-white"
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
