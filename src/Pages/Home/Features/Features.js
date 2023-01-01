import React from 'react';
import DataHome from '../DataHome/DataHome';

// const card = () => {

// }

export default function Features() {
    const card = (image, title, subTitle, text, key) => {
        return (
            <li key={key}>
                <div>
                    <img src={image} alt='' />
                </div>
                <div className='content'>
                    <h3>{subTitle}</h3>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </li>
        )
    }

    return (
        <section className='features'>
            <ul>
                {
                    DataHome.features.map((element, key) => {
                        return card(element.image, element.title, element.subtitle, element.text, key);
                    })
                }
            </ul>
        </section>
    )
}
