import React, { useState, useEffect } from 'react';
import BannerMovies from '../../../Components/BannerMovies/BannerMovies';
import RowMoviesTv from '../../../Components/RowMoviesTv.js/RowMoviesTv';
import { GetNewMovies } from '../../../Services/TheMoviesDbApi';

export default function NewMovies() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        GetNewMovies().then(movies => {
            setMoviesData(movies);
        });
    }, []);

    return (
        <section className='new-movies'>
            <BannerMovies />

            <RowMoviesTv
                title="Nouveaux films"
                text="Découvrez tous les derniers films nouvellement disponibles en streaming."
                moviesData={moviesData}
            />
        </section>
    )
}
