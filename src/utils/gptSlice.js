import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMoviesInfo: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovies: (state, action) => {
      const { gptMovies, gptMoviesInfo } = action.payload;
      state.gptMovies = gptMovies;
      state.gptMoviesInfo = gptMoviesInfo;
    },
  },
});

export const { toggleGptSearch, addGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;
