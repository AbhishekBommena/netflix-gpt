
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER_TOKEN
    }
  };

export const MOVIE_IMG_PATH = "https://image.tmdb.org/t/p/original";

export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"}, {identifier: "hindi", name: "Hindi"}, {identifier: "spanish", name: "Spanish"}];
export const GEMINI_API_PROMPT_PART_1 = "Act as a movie recommendation system and suggest some movies for they query : ";
export const GEMINI_API_PROMPT_PART_2 = ". Only give me 5 names of 5 and give as comma separated.Example result : 'Movie1, Movie2, Movie3, Movie4, Movie5'";
