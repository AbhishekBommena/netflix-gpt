import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[50%] left-36 flex flex-col gap-4">
      <p className="font-bold text-3xl text-white">{title}</p>
      <p className="w-2/6 text-justify text-white">{overview}</p>
      <div className="flex gap-4 mt-5">
        <button className="px-6 py-2 bg-white text-black font-medium rounded"><i class="fa-solid fa-lg fa-play mr-1"></i> Play</button>
        <button className="px-6 py-2 bg-black text-white font-medium rounded"><i class="fa-solid fa-circle-info fa-lg  mr-1"></i> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
