import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const { trailerVideo } = useSelector((store) => store.movies);
  const getTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonObj = await data.json();
    const trailer = jsonObj.results.filter(
      (eachObj) => eachObj.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0]));
  };

  useEffect(() => {
    if (!trailerVideo) getTrailerVideo();
  }, []);
};

export default useTrailerVideo;
