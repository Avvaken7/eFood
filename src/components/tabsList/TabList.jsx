import React from 'react';
import Button from '../button/Button';

import styles from './tabList.module.css';

const TabList = ({ img, title, price }) => {
    return (
        <div className={styles.listItem}>
            <img src={img} alt={title} />
            <p>Rating</p>
            <span>{title}</span>
            <span>${price}</span>
            <Button variant={'card'}>Add To Cart</Button>
        </div>
    );
};

export default TabList;