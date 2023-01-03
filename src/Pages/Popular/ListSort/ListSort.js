import React, { useState } from 'react';

export default function ListSort() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [sortBy, setSortBy] = useState(urlParams.get('sort_by'));

    const sortByPopularity = () => {
        if (sortBy !== 'popularity.asc') {
            urlParams.set('sort_by', 'popularity.asc');
            window.location.search = urlParams;
            setSortBy('popularity.asc');
        } else {
            urlParams.set('sort_by', 'popularity.desc');
            window.location.search = urlParams;
            setSortBy('popularity.desc');
        }
    }

    const sortByDate = () => {
        if (sortBy !== 'release_date.asc') {
            urlParams.set('sort_by', 'release_date.asc');
            window.location.search = urlParams;
            setSortBy('release_date.asc');
        } else {
            urlParams.set('sort_by', 'release_date.desc');
            window.location.search = urlParams;
            setSortBy('release_date.desc');
        }
    }

    return (
        <div className='sort'>
            <button onClick={sortByPopularity}>Popularité</button>
            <button onClick={sortByDate}>Date</button>
        </div>
    )
}
