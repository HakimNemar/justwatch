import React, { useEffect, useState } from 'react';
import { GetAllMovies } from '../../../Services/TheMoviesDbApi';
import imgDefault from '../../../Assets/Images/logo.png';
import ListSort from '../ListSort/ListSort';
import { Link } from 'react-router-dom';

export default function ListOfMovies() {
    const [movies, setMovies] = useState([]);
    const [totalPages, setPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [isEndOfPage, setIsEndOfPage] = useState(false);
    const [numberOfPage, setNumberOfPage] = useState(1);

    // premier resultat (affichage de base)
    useEffect(() => {
        GetAllMovies().then(movies => {
            setMovies(movies.results);
            setPages(movies.total_pages);
            setTotalResults(movies.total_results);
        });
    }, []);

    // si on arrive en bas de la page
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsEndOfPage((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 100));
        });
    }, [movies]);

    // isEndOfPage est true donc un get une nouvelle fois l'api pour recuperer la page suivant avec numberOfPage et on ajoute le resultat au tableau
    useEffect(() => {
        if (isEndOfPage && (numberOfPage + 1 < totalPages)) {
            GetAllMovies(numberOfPage + 1).then(moviesNext => {
                setNumberOfPage(moviesNext.page);
                setMovies(movies.concat(moviesNext.results));
            });
        }
    }, [isEndOfPage, numberOfPage, totalPages, movies]);

    return (
        <div className='movies'>

            <ListSort />

            <div className='total-results'>
                <p>{totalResults} Titres</p>
            </div>
            <ul>
                {movies.map((movie, key) => {
                    return (
                        <li key={key}>
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`${(movie.poster_path != null ? 'https://image.tmdb.org/t/p/original/' + movie.poster_path : imgDefault)}`}
                                    alt={movie.title} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
