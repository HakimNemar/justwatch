import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function RowMoviesTv({ title, text, fetchUrl, withIndex }) {
    const [movies, setMovies] = useState([]),
        [index, setIndex] = useState(0),
        currentSlide = useRef(null),
        currentSlideLi = useRef(null),
        slideLi = document.querySelector(".slide li"),
        nbrLiForDesktop = withIndex ? 3 : 5;

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results.slice(0, 10));
        }

        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        if (currentSlideLi) {
            if (index < movies.length) {
                console.log(index);
                currentSlide.current.style.transform = `translateX(${(-currentSlideLi.current.clientWidth) * index}px)`;
            }
        }
    }, [index, movies.length, slideLi]);

    const styleNumbreLi = {
        flex: withIndex ? `0 0 ${100 / (nbrLiForDesktop)}%` : `0 0 ${100 / (nbrLiForDesktop + 1)}%`,
        padding: withIndex ? '0 0px' : '0 20px'
    }

    return (
        <div className='rowMoviesTv'>
            <div className='description'>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className='carousel'>
                <ul className='slide' ref={currentSlide}>
                    {movies.map((movie, key) => {
                        return (
                            <li key={key} style={styleNumbreLi} ref={currentSlideLi}>
                                {withIndex &&
                                    <p>{key + 1}</p>
                                }
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            </li>
                        )
                    })}
                </ul>
                {/* <button className='prev' onClick={() => (index > (0 + (nbrLiForDesktop - 1)) && setIndex(index - nbrLiForDesktop))}></button> */}
                <button className='prev' onClick={() => (index > 0 && setIndex(index - nbrLiForDesktop))}></button>
                <button className='next' onClick={() => (index < (movies.length - nbrLiForDesktop) && setIndex(index + nbrLiForDesktop))}></button>
            </div>
        </div>
    )
}
