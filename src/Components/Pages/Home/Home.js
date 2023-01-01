import React from 'react';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import Top10 from './Top10/Top10';


export default function Home() {
    return (
        <div className='home'>

            <Intro />

            <Features />

            <Top10 />

        </div>
    )
}
