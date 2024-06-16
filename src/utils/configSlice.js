import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "appConfig",
    initialState: {
        languageKey: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.languageKey = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;