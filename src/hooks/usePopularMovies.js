import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector(store => store.movies);
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
    if(!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
