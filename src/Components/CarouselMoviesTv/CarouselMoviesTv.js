import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CarouselMoviesTv({ title, text, withIndex, moviesData }) {
    const [index, setIndex] = useState(0);
    const currentSlide = useRef(null);
    const currentSlideLi = useRef(null);
    const slideLi = document.querySelector(".slide li");
    const nbrLiForDesktop = withIndex ? 5 : 7;

    useEffect(() => {
        if (currentSlideLi && (index < moviesData.length)) {
            currentSlide.current.style.transform = `translateX(${(-currentSlideLi.current.clientWidth) * index}px)`;
        }
    }, [index, moviesData.length, slideLi]);

    const styleNumberLi = {
        flex: withIndex ? `0 0 ${100 / (nbrLiForDesktop)}%` : `0 0 ${100 / (nbrLiForDesktop + 1)}%`,
        padding: withIndex ? '0 0px' : '0 20px'
    }

    return (
        <div className='carousel-movies-tv'>
            {
                (title && text) &&
                <div className='description'>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            }

            <div className='carousel'>
                <ul className='slide' ref={currentSlide}>
                    {moviesData.map((movie, key) => {
                        return (
                            <li key={key} style={styleNumberLi} ref={currentSlideLi}>
                                <Link to={`/movie/${movie.id}`}>
                                    {withIndex &&
                                        <p>{key + 1}</p>
                                    }
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <button className='prev' onClick={() => (index > 0 && setIndex(index - nbrLiForDesktop))}></button>
                <button className='next' onClick={() => (index < (moviesData.length - nbrLiForDesktop) && setIndex(index + nbrLiForDesktop))}></button>
            </div>
        </div>
    )
}
