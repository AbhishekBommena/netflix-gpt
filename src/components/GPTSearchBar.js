import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import {
  API_OPTIONS,
  GEMINI_API_PROMPT_PART_1,
  GEMINI_API_PROMPT_PART_2,
} from "../utils/constants";
import { addGPTMovies } from "../utils/gptSlice";
import model from "../utils/geminiai";

const GPTSearchBar = () => {
  const { languageKey } = useSelector((store) => store.appConfig);
  const gptSrchInpText = useRef(null);
  const dispatch = useDispatch();

  const getMovieInfoFromTMDB = async (movie) => {
    const movieInfo = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
    return movieInfo;
  };
  const handleGptSearch = async () => {
    // Make an API call to GPT API and get movie results.
    const prompt =
      GEMINI_API_PROMPT_PART_1 +
      gptSrchInpText.current.value +
      GEMINI_API_PROMPT_PART_2;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const moviesByGeminiApi = response
      .text()
      .split(", ")
      .map((item) => item.trim());
    const dataFromTmdbMovieAPICall = moviesByGeminiApi.map((movie) =>
      getMovieInfoFromTMDB(movie)
    );
    // Above line gives array of promises -> [promise1, promise2, promise3, promise4, promise5]

    const moviesInfoFromTMDB = await Promise.all(dataFromTmdbMovieAPICall);
    const finalMoviesInfo = moviesInfoFromTMDB.map(movieObj => movieObj.results);
    console.log(moviesInfoFromTMDB, "verf");
    dispatch(
      addGPTMovies({
        gptMovies: moviesByGeminiApi,
        gptMoviesInfo: finalMoviesInfo,
      })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black p-4 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchInpPlaceholder}
          className="p-4 col-span-8"
          ref={gptSrchInpText}
        />
        <button
          className="px-8 py-4 ml-4 bg-red-800 text-white col-span-4"
          onClick={handleGptSearch}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
