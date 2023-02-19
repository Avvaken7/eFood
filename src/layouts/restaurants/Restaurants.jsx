import React from 'react';
import Card from '../../components/cards/Card';

import card1 from '../../assets/cards/card1.png';
import card2 from '../../assets/cards/card2.png';
import card3 from '../../assets/cards/card3.png';
import card4 from '../../assets/cards/card4.png';
import card5 from '../../assets/cards/card5.png';
import card6 from '../../assets/cards/card6.png';

import styles from './restaurants.module.css';
const Restaurants = () => {

    const listOfCards = [
        { id: 1, title: 'Blaze Pizza', img: card1, from: '11.00', to: '10.00' },
        { id: 2, title: 'Pizza Ranch', img: card2, from: '09.00', to: '10.00' },
        { id: 3, title: 'Dion’s Pizza Hut', img: card3, from: '10.00', to: '12.00' },
        { id: 4, title: 'Royel Burger', img: card4, from: '11.00', to: '10.00' },
        { id: 5, title: 'KFC Restaurant', img: card5, from: '09.00', to: '10.00' },
        { id: 6, title: 'Star Food', img: card6, from: '10.00', to: '12.00' }
    ]

    return (
        <section className='container'>
            <h2 className={styles.title}>
                Top Food <span className='helpColor'>restaurant</span>
            </h2>
            <div className={styles.cards}>
                {
                    listOfCards.map(item => (
                        <Card
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            timeFrom={item.from}
                            timeTo={item.to}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Restaurants;