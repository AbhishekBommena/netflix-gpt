import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GPTSearchBar = () => {
  const { languageKey } = useSelector((store) => store.appConfig);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black p-4 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchInpPlaceholder}
          className="p-4 col-span-8"
        />
        <button className="px-8 py-4 ml-4 bg-red-800 text-white col-span-4">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
