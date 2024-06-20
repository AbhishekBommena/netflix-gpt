import React from "react";
import { useSelector } from "react-redux";
import ListOfMovies from "./ListOfMovies";

const GPTMovieSuggestions = () => {
  const { gptMovies, gptMoviesInfo } = useSelector((store) => store.gpt);
  if(!gptMovies) return null;
  return (
    <div className="bg-black m-6 p-10 ">
      {gptMovies.map((movie, index) => (
        <ListOfMovies title={movie} movies={gptMoviesInfo[index]} key={movie} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
