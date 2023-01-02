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

export const GetTrending = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchTrending);
    return request.data.results.slice(0, 7);
}

export const GetTrendingTv = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchTrendingTv);
    return request.data.results.slice(0, 7);
}

export const GetNewMovies = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchNewMovies);
    return request.data.results;
}

export const GetNewTv = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchNewTv);
    return request.data.results;
}

export const GetSpotlight = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchSpotlight);
    return request.data.results;
}

export const GetPopularMovies = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchPopularMovies);
    return request.data.results;
}

export const GetPopularTv = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchPopularTv);
    return request.data.results;
}

export const GetAllMovies = async () => {
    const request = await axios.get(TheMoviesDbRequests.fetchAllMovies);
    return request.data;
}
