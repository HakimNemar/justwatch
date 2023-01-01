import React from 'react'
import European from '../../Assets/Images/Footer/european-union.png';
import Media from '../../Assets/Images/Footer/logo-media.png';

export default function Footer() {
    return (
        <footer>
            <div>
                <p>© 2023 JustWatch - The Streaming Guide - - All external content remains the property of the rightful owner.</p>
                <p>Imprint · Privacy Policy · Emplois</p>
            </div>
            <div>
                <img src={European} alt='European Union' />
                <img src={Media} alt='Europe Media' />
            </div>
        </footer>
    )
}
