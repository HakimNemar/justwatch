import React from 'react'
import { Link } from 'react-router-dom';
import Providers from './DataProviders';

export default function Intro() {
    return (
        <section className='intro'>
            <div className='content'>
                <h1>Votre guide de streaming pour les films, les séries et le sport</h1>
                <p>Découvrez où regarder en streaming les divertissements les plus populaires, les nouveautés et les prochaines sorties avec JustWatch.</p>
                <div className='cta'>
                    <button className='cta-first'>Découvrez de nouveaux films et séries</button>
                    <button className='cta-second'>Fonctionnalités</button>
                </div>
                <div className='providers'>
                    <p>Services de streaming sur JustWatch</p>
                    <ul>
                        {
                            Providers.map((provider, key) => {
                                return (
                                    <li key={key}>
                                        <Link to="/new"><img src={provider.image} alt={provider.name} /></Link>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <Link to="#">Tout voir</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
