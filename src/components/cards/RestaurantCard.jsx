import React from 'react';
import Button from '../button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './restaurantCard.module.css';
const RestaurantCard = ({ img, title, timeFrom, timeTo }) => {
    return (
        <div className={styles.card}>
            <a href="/" className={styles.cardTumblr}>
                <img src={img} alt={title} className={styles.cardImg}/>
            </a>
            <div className={styles.cardContent}>
                <h3 className={styles.ContentTitle}>{title}</h3>
                <div className={styles.cta}>
                    <FontAwesomeIcon icon={faClock} />
                    {timeFrom}AM - {timeTo}PM
                    <Button variant={'food'}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;