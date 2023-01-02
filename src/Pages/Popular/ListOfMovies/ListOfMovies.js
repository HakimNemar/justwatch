import React, { useEffect, useState } from 'react';
import { GetAllMovies } from '../../../Services/TheMoviesDbApi';
import imgDefault from '../../../Assets/Images/logo.png';
import ListSort from '../ListSort/ListSort';

export default function ListOfMovies() {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original/';
    const [movies, setMovies] = useState([]);
    const [totalPages, setPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [isEndOfPage, setIsEndOfPage] = useState(false);
    const [numberOfPage, setNumberOfPage] = useState(1);

    // premier resultat (affichage de base)
    useEffect(() => {
        document.body.style.backgroundColor = "#060d17";
        GetAllMovies().then(movies => {
            setMovies(movies.results);
            setPages(movies.total_pages);
            setTotalResults(movies.total_results);
        });
    }, []);

    // si on arrive en bas de la page
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 100)) {
                setIsEndOfPage(true);
            } else {
                setIsEndOfPage(false);
            }
        });
    }, [movies]);

    // isEndOfPage est true donc un get une nouvelle fois l'api pour recuperer la page suivant avec numberOfPage et on append le resultat a ul
    useEffect(() => {
        if (isEndOfPage) {
            const ul = document.querySelector('.popular .movies ul');

            if (numberOfPage + 1 < totalPages) {
                GetAllMovies(numberOfPage + 1).then(movies => {
                    setNumberOfPage(movies.page);

                    movies.results.map((movie, key) => {
                        let li = document.createElement("li");
                        li.innerHTML = `<img id=${key} src='${BASE_URL_IMG}${movie.poster_path}' alt=${movie.title} />`;
                        return ul.appendChild(li);
                    });
                });
            }
        }
    }, [isEndOfPage, numberOfPage, totalPages]);

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
                            <img src={`${(movie.poster_path != null ? BASE_URL_IMG + movie.poster_path : imgDefault)}`} alt={movie.title} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
