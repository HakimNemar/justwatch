import React from 'react';
import Requests from '../../../Requests/Requests';
import RowMoviesTv from '../../../RowMoviesTv.js/RowMoviesTv';

export default function Top10() {
    return (
        <section className='top10'>
            <div className='title'>
                <h1>Découvrez les films et les séries les plus populaires, les nouveautés et les prochaines sorties</h1>
            </div>

            <RowMoviesTv
                title="Top 10 des films de la semaine"
                text="Découvrez les films les plus populaires de la semaine et où les regarder."
                fetchUrl={Requests.fetchTopRatedMovies} />

        </section>
    )
}
