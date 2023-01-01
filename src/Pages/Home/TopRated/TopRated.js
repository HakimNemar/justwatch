import React, { useEffect, useState } from 'react';
import RowMoviesTv from '../../../Components/RowMoviesTv.js/RowMoviesTv';
import { GetTopRatedMovies, GetTopRatedTv } from '../../../Services/TheMoviesDbApi';

export default function TopRated() {
    const [moviesData, setMoviesData] = useState([]);
    const [tvData, setTvData] = useState([]);

    useEffect(() => {
        GetTopRatedMovies().then(movies => {
            setMoviesData(movies);
        });
        GetTopRatedTv().then(tv => {
            setTvData(tv);
        });
    }, []);

    return (
        <section className='top-rated'>
            <div className='title'>
                <h1>Découvrez les films et les séries les plus populaires, les nouveautés et les prochaines sorties</h1>
            </div>

            <RowMoviesTv
                title="Top 10 des films de la semaine"
                text="Découvrez les films les plus populaires de la semaine et où les regarder."
                withIndex={true}
                moviesData={moviesData}
            />

            <RowMoviesTv
                title="Top 10 des séries de la semaine"
                text="Découvrez les séries les plus populaires de la semaine et où les regarder en streaming."
                withIndex={true}
                moviesData={tvData} />

        </section>
    )
}
