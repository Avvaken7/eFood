import React from 'react';
import Button from '../../components/button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faTruckFast, faShop } from '@fortawesome/free-solid-svg-icons';

import deliveryImg from '../../assets/foodDelivery.webp';

import styles from './delivery.module.css';

const Delivery = () => {
    return (
        <section className={styles.delivery}>
            <div className='container'>
                <div className={styles.deliveryContent}>
                    <div className={styles.deliveryImg}>
                        <img src={deliveryImg} alt="Delivery Guy" />
                    </div>
                    <div className={styles.deliveryDescription}>
                        <h2>
                            <span className='helpColor'>Stay</span> at home, we will Provide <span className='helpColor'>good food</span>
                        </h2>
                        <p className={styles.deliveryText}>We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
                        <div className={styles.deliveryItems}>
                            <div className={styles.item}>
                                <FontAwesomeIcon icon={faStopwatch} size={'2x'} color={'#F99462'} className={styles.icon}/>
                                <span>fast delivery in 30 Minutes</span>
                            </div>
                            <div className={styles.item}>
                                <FontAwesomeIcon icon={faTruckFast} size={'2x'} color={'#63CBFE'} className={styles.icon}/>
                                <span>300+ delivery men</span>
                            </div>
                            <div className={styles.item}>
                                <FontAwesomeIcon icon={faShop} size={'2x'} color={'#FF7070'} className={styles.icon}/>
                                <span>500+ restaurants & coffee shops</span>
                            </div>
                        </div>
                        <Button variant={'rounded'}>See More</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Delivery;