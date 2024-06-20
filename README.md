# Netflix GPT

- Create react App
- Configure TailwindCSS
- Header
- Routing of App
- Login form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create a user account using firebase signUp API
- Implement firebase SignIn user API
- Creating redux store with userSlice
- Implementing signOut
- Updating the profile using firebase update API
- BugFix: Sign up user with displayname(already covered with above point) and profile picture(no done yet).
- BugFix: user should be able to directly go to browse page and post login should be able to access login page.
- Unsubscribed to onAuthStateChanged call
- removed hard coded NetFlix main logo url and replaced with constants.
- Register in TMDB site for TMDB APIs and create an app in site and create a access token.
- Get data from TMDB using nowPlayingMovies(current movies that are running in theatres.)
- Custom hook for nowPlayingMovies(useNowPlayingMovies)
- created movieSlice
- code for updating store with movies data i.e., in movieSlice
- created mainContainer that contains backgroundVideo and respective video title. And secondaryContainer(yet to be developed) that contains list of movies.
- Fetching data for trailer or backgroundVideo in browsePage.
- Updatin store with trailer video data.
- Embedded youtube Video and made it autoplay and mute
- Built Secondary Component
- Built ListOfMovies comp
- Built MovieCard
- Added TMDB Image CDN URL
- Modified styling in browse page
- Created usePopularMovies Hook
- GPT Search Page
- GPT Search Bar
- Multi lang Feature For GPT Search page.
- Added Open AI/ Gemini AI API key
- Used GPT Search API 
- Fetched movies info from TMDB Which are suggested by GPT 
- Created gptSlice
- Reused ListOfMovies component in gptSearch
- Memoization implemented
- Added .env file




# Features

- Login/Sign Up
    - Sign In/Sign Up Form
    - redirect to browse page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - MovieSuggestions
            -   Movie Lists * N
- NetflixGPT
    - search Bar
    - Movie Suggestions


# Firebase Usage

- For Authentication
    - Create a project
    - Add firebase to your web App (this is to deploy and host your app)
        - Add firebase SDK To app by using respective cmds(given in firebase site)
        - Create a firebase.js and put the config that is given in firebase site in it.
        - Install Firebase CLI(For hosting purpose)
    - Login firebase via cmd
    - Initialize firebase(with cmds)
    - Deploy firebase(with cmds)