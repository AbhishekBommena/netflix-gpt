import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptContainer from "./GptContainer";

const Browse = () => {
  const { showGptSearch } = useSelector((store) => store.gpt);

  // gets current running movies in theatre.
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptContainer />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
