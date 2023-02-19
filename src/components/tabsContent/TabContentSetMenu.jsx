import React from 'react';
import Button from '../button/Button';

import menu from '../../assets/setMenu/menu.jpg'


const TabContentSetMenu = ({ id, activeTab }) => {

    const listOfMenu = [
        { title: 'Soup1', img: `${menu}`, price: '12.00' },
        { title: 'Soup2', img: `${menu}`, price: '10.00' },
        { title: 'Soup3', img: `${menu}`, price: '21.00' },
        { title: 'Soup4', img: `${menu}`, price: '52.00' },
        { title: 'Soup5', img: `${menu}`, price: '13.00' }
    ]

    return (
        activeTab === id && listOfMenu.map(item => (
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

export default TabContentSetMenu;