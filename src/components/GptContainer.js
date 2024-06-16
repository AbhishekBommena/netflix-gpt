import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptContainer = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG_URL}
          alt="backgroundImg"
          className=""
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GptContainer;
