import React, { useState } from 'react';
import ListOfMovies from './ListOfMovies/ListOfMovies';

export default function Popular() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        let content = document.querySelector('.popular .content');

        if (isOpen) {
            content.style.height = '138px';
            setIsOpen(false);
        } else {
            content.style.height = '100%';
            setIsOpen(true);
        }
    }

    return (
        <section className='popular'>
            <div className='content' onClick={handleClick}>
                <h2>Bienvenue chez JustWatch</h2>
                <div>
                    <p>Bienvenue sur JustWatch, le meilleur moteur de recherche pour découvrir où regarder films et séries en streaming légal !</p>
                    <p>JustWatch vous permet d’explorer facilement les catalogues de Netflix, Canal+, OCS Go, Amazon Prime Video et 20+ autres
                        plateformes de VoD françaises. Le contenu entier de leur catalogue est répertorié et rangé ci-dessous par popularité.
                        <br />
                        Nous avons développé des options de filtrage simples et efficaces pour vous permettre de découvrir des films et séries
                        en streaming qui vous plairont, que ce soit les meilleurs films de l'année ou les films incontournables à voir ou la
                        série du moment - le tout, en un simple clic: genres, date de sortie, prix et plus encore, filtrez et profitez !</p>
                    <p>JustWatch vous aide aussi à savoir quelles nouvelles séries et quels nouveaux films ont rejoint les services de streaming.
                        Rendez-vous ici pour voir les sorties Netflix, OCS Go, SFR Play et autres plateformes de streaming légales.</p>
                    <p>Si vous voulez en savoir plus sur ce qui arrive bientôt, parcourez la section “Films et séries à venir” sur JustWatch.
                        Vous y découvrirez les prochaines sorties sur les plateformes de streaming les plus populaires en France et pourrez
                        utiliser nos filtres pour trouver plus facilement les films et séries à venir.</p>
                </div>
                <span></span>
            </div>

            <ListOfMovies />
        </section>
    )
}
