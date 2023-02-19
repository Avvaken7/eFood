import React from 'react';

import Button from '../button/Button';

import burger1 from '../../assets/burgers/burger1.svg';
import burger2 from '../../assets/burgers/burger2.png';
import burger3 from '../../assets/burgers/burger3.svg';
import burger4 from '../../assets/burgers/burger4.svg';
import burger5 from '../../assets/burgers/burger5.svg';

const TabContentBurgers = ({ id, activeTab }) => {


    const listOfBurgers = [
        { title: 'Cheeseburger With Salad', img: `${burger1}`, price: '18.00' },
        { title: 'Beef Burger', img: `${burger2}`, price: '15.00' },
        { title: 'Royel Cheeseburger', img: `${burger3}`, price: '16.00' },
        { title: 'Black Gambugrer ', img: `${burger4}`, price: '15.00' },
        { title: 'Chicken Burger ', img: `${burger5}`, price: '15.00' },
    ]

    return (
        activeTab === id && listOfBurgers.map(item => (
            <div className='listItem' key={item.title}>
                <img src={item.img} className='listItemImg' alt={item.title} />
                <p>Rating</p>
                <span>{item.title}</span>
                <span className='price'>${item.price}</span>
                <Button variant={'card'}>Add To Cart</Button>
            </div>
        ))
    )
};

export default TabContentBurgers;