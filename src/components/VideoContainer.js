import React from "react";

import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoContainer = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div className="">
      <iframe
        className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&disablekb=1&playlist=${trailerVideo?.key}&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
