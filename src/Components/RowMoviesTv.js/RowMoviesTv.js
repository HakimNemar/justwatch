import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RowMoviesTv({ title, text, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className='rowMoviesTv'>
            <div className='description'>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className='carousel'>
                <ul className='slide'>
                    {movies.map((movie, key) => {
                        return (
                            <li key={key}>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            </li>
                        )
                    })}
                </ul>
                <button className='prev'></button>
                <button className='next'></button>
            </div>
        </div>
    )
}
