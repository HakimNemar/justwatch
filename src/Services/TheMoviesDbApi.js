import axios from 'axios';
import TheMoviesDbRequests from './TheMoviesDbRequests';

export const GetTopRatedMovies = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchTopRatedMovies);
    return request.data.results.slice(0, 10);
}

export const GetTopRatedTv = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchTopRatedTv);
    return request.data.results.slice(0, 10);
}
