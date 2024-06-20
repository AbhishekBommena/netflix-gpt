import React from "react";
import { useSelector } from "react-redux";
import ListOfMovies from "./ListOfMovies";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector(store => store.movies.popularMovies);
  return (
    <div className="bg-black px-14">
      <div className="-mt-52">
        <ListOfMovies title={"Now Playing"} movies={nowPlayingMovies} />
        <ListOfMovies title={"Popular Movies"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
