import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=2`,
      API_OPTIONS
    );
    const jsonObj = await data.json();
    const popularMovies = jsonObj.results;
    dispatch(addPopularMovies(popularMovies));
    console.log(popularMovies);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
