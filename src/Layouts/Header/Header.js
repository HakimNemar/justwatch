import React, { useEffect, useState } from 'react';
import Logo from '../../Assets/Images/logo.png';
import loupe from '../../Assets/Images/loupe.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    const [bgColorChange, setBgColorChange] = useState(false);

    const listenScrollEvent = (event) => {
        if (window.scrollY > (window.innerHeight * 0.85)) {
            return setBgColorChange(true);
        } else {
            return setBgColorChange(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header className={bgColorChange ? ' bgDark' : ''}>
            <div className='head'>
                <Link to="/"><img src={Logo} alt='Logo' /></Link>

                <ul>
                    <li>
                        <Link to="/new">Nouveautés</Link>
                    </li>
                    <li>
                        <Link to="/new">Populaire</Link>
                    </li>
                    <li>
                        <Link to="/new">Sports</Link>
                    </li>
                    <li>
                        <img src={loupe} className="loupe" alt="loupe" />
                        <input type='search' id='search' name='search' placeholder='Rechercher un film ou une série' />
                    </li>
                    <li>
                        <button>Se connecter</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
