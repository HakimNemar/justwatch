import React from 'react';
import Logo from '../../assets/img/logo.png';
import loupe from '../../assets/img/loupe.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
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
