import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const { showGptSearch } = useSelector((store) => store.gpt);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when comp unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-[100%] bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img src={LOGO} alt="logo" className=" w-48 mx-36 py-1 " />
      <div>
        {showGptSearch && (
          <select
            className="mr-10 font-medium text-white bg-transparent"
            onChange={(e) => dispatch(changeLanguage(e.target.value))}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                className="text-black"
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="mr-10 font-medium text-white"
          onClick={() => dispatch(toggleGptSearch())}
        >
          {showGptSearch ? "Home" : "GPT Search"}
        </button>
        {auth.currentUser !== null && (
          <button
            className="mr-10 font-medium text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
