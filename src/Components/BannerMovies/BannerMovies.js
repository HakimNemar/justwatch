import React, { useEffect, useState, useRef } from 'react'
import { GetTrending } from '../../Services/TheMoviesDbApi';
import Imdb from '../../Assets/Images/imdb-logo.png';

const mathArround = (number) => {
    // arrondire la note de vote a un chiffre apres la virgule
    let valueArround = (Math.floor(number * 10) / 10);
    return valueArround;
}

export default function BannerMovies() {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlide = useRef(null);
    const currentSlideLi = document.querySelector('.new-movies .slide li');

    useEffect(() => {
        GetTrending().then(movies => {
            setMovies(movies);
        });
    }, []);

    useEffect(() => {
        if (currentSlideLi) {
            if (currentIndex < movies.length) {
                currentSlide.current.style.transform = `translateX(${(-currentSlideLi.clientWidth) * currentIndex}px)`;
            }
        }
    }, [movies, currentIndex, currentSlideLi]);

    // setTimeout(() => {
    //     if (currentIndex < currentSlide.current.children.length - 1) {
    //         setCurrentIndex(currentIndex + 1);
    //     } else {
    //         setCurrentIndex(0);
    //     }
    // }, 3000);

    return (
        <div className='banner-movies'>
            <ul ref={currentSlide} className='slide'>
                {movies.map((movie, key) => {
                    return (
                        <li key={key}>
                            <figure>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                            </figure>
                            <div className='content'>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='poster' />
                                <div className='description'>
                                    <h3>{movie.title}</h3>
                                    <div className='vote'>
                                        <img src={Imdb} alt='IMDB logo' className='imdb' />
                                        <h4>{mathArround(movie.vote_average)} ({movie.vote_count})</h4>
                                    </div>
                                    <p>{movie.overview}</p>
                                    <button className='btn-plus-info'>Plus d'infos</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <ul className='index'>
                {movies.map((movie, key) => {
                    return (
                        <li key={key} className={key === currentIndex ? 'active' : ''}></li>
                    )
                })}
            </ul>
            <button className='prev' onClick={() => (currentIndex > 0 && setCurrentIndex(currentIndex - 1))}></button>
            <button className='next' onClick={() => (currentIndex < ((currentSlide.current.children.length - 1)) && setCurrentIndex(currentIndex + 1))}></button>
        </div>
    )
}
