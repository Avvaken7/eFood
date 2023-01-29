import React from 'react';
import Button from '../../components/button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './card.module.css';
const Card = ({ img, title, timeFrom, timeTo }) => {
    return (
        <div className={styles.card}>
            <a href="/">
                <img src={img} alt={title} className={styles.img}/>
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

export default Card;