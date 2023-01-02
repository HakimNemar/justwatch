import React, { useEffect, useState } from 'react'
import { GetTrendingTv } from '../../Services/TheMoviesDbApi';
import DataHome from '../../Pages/Home/DataHome/DataHome';

export default function BannerTv() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        GetTrendingTv().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <div className='banner-tv'>
            <h2>Nouvelles séries</h2>
            <ul>
                {movies.map((movie, key) => {
                    if (key < 2) {
                        return (
                            <li key={key}>
                                <figure>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                                </figure>
                                <div className='content'>
                                    <img src={DataHome.providers[key].image} alt={DataHome.providers[key].name} />
                                    <h3>{movie.title}</h3>
                                    <p>{movie.overview}</p>
                                    <button className='btn-plus-info'>Plus d'infos</button>
                                </div>
                            </li>
                        )
                    } else {
                        return false;
                    }
                })}
            </ul>
        </div>
    )
}
