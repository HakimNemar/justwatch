import React, { useEffect, useState } from 'react';
import RowMoviesTv from '../../../Components/RowMoviesTv.js/RowMoviesTv';
import { GetPopularMovies, GetPopularTv } from '../../../Services/TheMoviesDbApi';

export default function Popular() {
    const [moviesData, setMoviesData] = useState([]);
    const [tvData, setTvData] = useState([]);

    useEffect(() => {
        GetPopularMovies().then(movies => {
            setMoviesData(movies);
        });
        GetPopularTv().then(tv => {
            setTvData(tv);
        });
    }, []);

    return (
        <section className='popular'>
            <RowMoviesTv
                title="Films populaires"
                text="Découvrez les films les plus populaires en ce moment et où les regarder."
                moviesData={moviesData}
            />

            <RowMoviesTv
                title="Séries populaires"
                text="Découvrez les séries les plus populaires en ce moment et où les regarder en streaming."
                moviesData={tvData} />
        </section>
    )
}
