import React from "react";
import MovieCard from "./MovieCard";

const ListOfMovies = ({ title, movies }) => {
  if(!movies) return null;
  return (
    <div className="">
      <p className="text-2xl font-medium pb-3 text-white">{title}</p>
      <div className="flex flex-row gap-6 overflow-x-scroll scrollbar-hidden">
        {movies?.map((eachMovie) => (
          <MovieCard key={eachMovie.id} movieInfo={eachMovie} />
        ))}
      </div>
    </div>
  );
};

export default ListOfMovies;
