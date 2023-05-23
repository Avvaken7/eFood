import React from 'react';
import RestaurantCard from '../../components/cards/RestaurantCard';

import card1 from '../../assets/cards/card1.webp';
import card2 from '../../assets/cards/card2.webp';
import card3 from '../../assets/cards/card3.webp';
import card4 from '../../assets/cards/card4.webp';
import card5 from '../../assets/cards/card5.webp';
import card6 from '../../assets/cards/card6.webp';

import styles from './restaurants.module.css';
const Restaurants = () => {

    const listOfCards = [
        { id: 1, title: 'Blaze Pizza', img: card1, from: '11.00', to: '10.00' },
        { id: 2, title: 'Pizza Ranch', img: card2, from: '09.00', to: '10.00' },
        { id: 3, title: 'Dion’s Pizza Hut', img: card3, from: '10.00', to: '12.00' },
        { id: 4, title: 'Royal Burger', img: card4, from: '11.00', to: '10.00' },
        { id: 5, title: 'KFC Restaurant', img: card5, from: '09.00', to: '10.00' },
        { id: 6, title: 'Star Food', img: card6, from: '10.00', to: '12.00' }
    ]

    return (
        <section className='container'>
            <h2 className={styles.title}>
                Top Food <span className='helpColor'>restaurants</span>
            </h2>
            <div className={styles.cards}>
                {
                    listOfCards.map(item => (
                        <RestaurantCard
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