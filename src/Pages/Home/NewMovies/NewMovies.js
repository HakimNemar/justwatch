import React, { useState, useEffect } from 'react';
import BannerMovies from '../../../Components/BannerMovies/BannerMovies';
import CarouselMoviesTv from '../../../Components/CarouselMoviesTv/CarouselMoviesTv';
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

            <CarouselMoviesTv
                title="Nouveaux films"
                text="Découvrez tous les derniers films nouvellement disponibles en streaming."
                moviesData={moviesData}
            />
        </section>
    )
}
