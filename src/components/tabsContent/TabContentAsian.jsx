import React from 'react';

import Button from '../button/Button';

import beefBulgogi from '../../assets/asian/BeefBulgogi.png';
import gaengKiewWanGoong from '../../assets/asian/Gaeng-Kiew-Wan-Goong.png';
import ramen from '../../assets/asian/ramen.png';
import sushi from '../../assets/asian/sushi.png';
import wontonNoodleSoup from '../../assets/asian/wonton-noodle-soup.png';

const TabContentAsian = ({ id, activeTab }) => {

    const listOfAsianFood = [
        { title: 'Beef Bulgogi', img: `${beefBulgogi}`, price: '41.00' },
        { title: 'Gaeng Kiew Wan Goong', img: `${gaengKiewWanGoong}`, price: '35.00' },
        { title: 'Ramen', img: `${ramen}`, price: '18.00' },
        { title: 'Sushi', img: `${sushi}`, price: '20.00' },
        { title: 'Wonton Noodle Soup', img: `${wontonNoodleSoup}`, price: '38.00' }
    ]

    return (
        activeTab === id && listOfAsianFood.map(item => (
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

export default TabContentAsian;