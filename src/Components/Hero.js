import React from 'react';
import Cta from './Cta';
import './Hero.css';

export default function Hero() {
    return (
        <section className='hero'>
            <div className="container hero-cta">
                <Cta mainHead='Offerings for all your soulfull prayers.'
                smallHead='All your fuzz to collect items for pooja is on us.' />
            </div>
        </section>
    )
}
