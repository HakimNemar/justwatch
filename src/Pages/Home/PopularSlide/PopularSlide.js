import React, { useEffect, useState } from 'react';
import CarouselMoviesTv from '../../../Components/CarouselMoviesTv/CarouselMoviesTv';
import { GetPopularMovies, GetPopularTv } from '../../../Services/TheMoviesDbApi';

export default function PopularSlide() {
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
        <section className='popular-slide'>
            <CarouselMoviesTv
                title="Films populaires"
                text="Découvrez les films les plus populaires en ce moment et où les regarder."
                moviesData={moviesData}
            />

            <CarouselMoviesTv
                title="Séries populaires"
                text="Découvrez les séries les plus populaires en ce moment et où les regarder en streaming."
                moviesData={tvData} />
        </section>
    )
}
