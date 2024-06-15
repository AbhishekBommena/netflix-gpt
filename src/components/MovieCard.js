import React from "react";
import { MOVIE_IMG_PATH } from "../utils/constants";

const MovieCard = ({ movieInfo }) => {
  return (
    <div className="shrink-0 w-48" >
      <img src={MOVIE_IMG_PATH+movieInfo.poster_path} alt={movieInfo.title}/>
    </div>
  );
};

export default MovieCard;
