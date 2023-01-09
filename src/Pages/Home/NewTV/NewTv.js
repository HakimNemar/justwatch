import React, { useState, useEffect } from 'react';
import CarouselMoviesTv from '../../../Components/CarouselMoviesTv/CarouselMoviesTv';
import { GetNewTv } from '../../../Services/TheMoviesDbApi';
import BannerTv from '../../../Components/BannerTv/BannerTv';

export default function NewTv() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        GetNewTv().then(movies => {
            setMoviesData(movies);
        });
    }, []);
    return (
        <section className='new-tv'>

            <BannerTv />

            <CarouselMoviesTv
                title="Nouvelles séries"
                text="Jetez un œil à chaque nouvelle émission télévisée récemment disponible sur les services de streaming."
                moviesData={moviesData}
            />
        </section>
    )
}
