import React from 'react';
import useRequest from '../../../Hooks/UseRequest';
import CarouselMoviesTv from '../../../Components/CarouselMoviesTv/CarouselMoviesTv';
import { GetTopRatedMovies, GetTopRatedTv } from '../../../Services/TheMoviesDbApi';

export default function TopRated() {
    const [moviesData, moviesError] = useRequest(GetTopRatedMovies);
    const [tvData, tvError] = useRequest(GetTopRatedTv);

    return (
        <section className='top-rated'>
            <div className='title'>
                <h1>Découvrez les films et les séries les plus populaires, les nouveautés et les prochaines sorties</h1>
            </div>
            {
                moviesError ?
                    <p>{moviesError}</p>
                    :
                    <CarouselMoviesTv
                        title="Top 10 des films de la semaine"
                        text="Découvrez les films les plus populaires de la semaine et où les regarder."
                        withIndex={true}
                        moviesData={moviesData} />
            }
            {
                tvError ?
                    <p>{tvError}</p>
                    :
                    <CarouselMoviesTv
                        title="Top 10 des séries de la semaine"
                        text="Découvrez les séries les plus populaires de la semaine et où les regarder en streaming."
                        withIndex={true}
                        moviesData={tvData} />
            }
        </section>
    )
}
