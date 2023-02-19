import React from 'react';

import Button from '../button/Button';

import bafallo from '../../assets/pizza/bafallo.png';
import carbonara from '../../assets/pizza/carbonara.png';
import hawaiian from '../../assets/pizza/hawaiian.png';
import margarita from '../../assets/pizza/margarita.png';
import peperoni from '../../assets/pizza/peperoni.png';


const TabContentPizza = ({ id, activeTab }) => {
    
    const listOfPizza = [
        { title: 'Pizza Bafallo', img: `${bafallo}`, price: '25.00' },
        { title: 'Pizza Carbonara', img: `${carbonara}`, price: '35.00' },
        { title: 'Hawaiian Pizza', img: `${hawaiian}`, price: '30.00' },
        { title: 'Pizza Margarita ', img: `${margarita}`, price: '25.00' },
        { title: 'Pizza Peperoni ', img: `${peperoni}`, price: '21.00' },
    ]

    return (
        activeTab === id && listOfPizza.map(item => (
            <div className='listItem' key={item.title}>
                <img src={item.img} className='listItemImg' alt={item.title} />
                <p>Rating</p>
                <span>{item.title}</span>
                <span className='price'>${item.price}</span>
                <Button variant={'card'}>Add To Cart</Button>
            </div>
        ))
    );
};

export default TabContentPizza;