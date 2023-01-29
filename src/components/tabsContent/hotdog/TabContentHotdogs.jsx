import React from 'react';
import Button from '../../button/Button';

import france from '../../../assets/hotdogs/france.png'
import michigan from '../../../assets/hotdogs/michigan.png'
import coney from '../../../assets/hotdogs/coney.png'
import italian from '../../../assets/hotdogs/Italian.png'
import chili from '../../../assets/hotdogs/chili.png'

import styles from './tabContentHotdogs.module.css';

const TabContentHotdogs = ({ id, activeTab }) => {


    const listOfHotdogs = [
        { title: 'France HotDog', img: `${france}`, price: '10.00' },
        { title: 'Michigan HotDog', img: `${michigan}`, price: '12.00' },
        { title: 'Coney HotDog', img: `${coney}`, price: '11.00' },
        { title: 'Italian HotDog', img: `${italian}`, price: '10.00' },
        { title: 'Chili HotDog ', img: `${chili}`, price: '21.00' }
    ]

    return (
        activeTab === id && listOfHotdogs.map(item => (
            <div className={styles.listItem} key={item.title}>
                <img src={item.img} className={styles.img} alt={item.title} />
                <p>Rating</p>
                <span>{item.title}</span>
                <span className={styles.price}>${item.price}</span>
                <Button variant={'card'}>Add To Cart</Button>
            </div>
        ))
    );
};

export default TabContentHotdogs;