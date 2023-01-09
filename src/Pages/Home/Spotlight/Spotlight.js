import React, { useEffect, useState } from 'react';
import CarouselMoviesTv from '../../../Components/CarouselMoviesTv/CarouselMoviesTv';
import DataHome from '../../../Pages/Home/DataHome/DataHome';
import spotlight from '../../../Assets/Images/spotlight-default.jpeg';
import { GetSpotlight } from '../../../Services/TheMoviesDbApi';

export default function Spotlight() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        GetSpotlight().then(movies => {
            setMoviesData(movies);
        });
    }, []);

    return (
        <section className='spotlight'>
            <div className='title'>
                <img src={DataHome.providers[6].image} alt={DataHome.providers[6].name} className='provider' />

                <h1>Les coups de cœur sélectionnés par Apple TV Plus pour vous</h1>
            </div>

            <CarouselMoviesTv moviesData={moviesData} />

            <figure>
                {moviesData[0] ?
                    <img src={`https://image.tmdb.org/t/p/original/${moviesData[0].backdrop_path}`} alt={moviesData[0].title} />
                    :
                    <img src={spotlight} alt='Spotlight' />
                }
            </figure>
        </section>
    )
}
