import React from 'react';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import TopRated from './TopRated/TopRated';
import NewMovies from './NewMovies/NewMovies';
import NewTv from './NewTV/NewTv';

export default function Home() {
    return (
        <div className='home'>

            <Intro />

            <Features />

            <TopRated />

            <NewMovies />

            <NewTv />

        </div>
    )
}
