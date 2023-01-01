import React from 'react';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import TopRated from './TopRated/TopRated';
import NewMovies from './NewMovies/NewMovies';

export default function Home() {
    return (
        <div className='home'>

            <Intro />

            <Features />

            <TopRated />

            <NewMovies />

        </div>
    )
}
