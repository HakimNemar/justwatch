import { useEffect, useState } from 'react';
// import { GetTopRatedMovies, GetTopRatedTv } from '../Services/TheMoviesDbApi';

const useRequestMultiple = (GetTopRatedMovies, GetTopRatedTv) => {
    const [moviesData, setMoviesData] = useState([]);
    const [tvData, setTvData] = useState([]);

    useEffect(() => {
        try {
            GetTopRatedMovies().then(movies => {
                setMoviesData(movies);
            });
            GetTopRatedTv().then(tv => {
                setTvData(tv);
            });
        }
        catch {
            console.log('Pas de film');
        }
    }, [moviesData, tvData]);

    return [moviesData, tvData];
};

export default useRequestMultiple;
