const API_KEY = "e1ca3f6b7436f2fbf633fe133af42ae0";
const BASE_URL = "https://api.themoviedb.org/3";

const Requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedTv: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=52`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default Requests;