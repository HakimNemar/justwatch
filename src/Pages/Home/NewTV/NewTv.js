import React, { useState, useEffect } from 'react';
import RowMoviesTv from '../../../Components/RowMoviesTv.js/RowMoviesTv';
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

            <RowMoviesTv
                title="Nouvelles séries"
                text="Jetez un œil à chaque nouvelle émission télévisée récemment disponible sur les services de streaming."
                moviesData={moviesData}
            />
        </section>
    )
}
