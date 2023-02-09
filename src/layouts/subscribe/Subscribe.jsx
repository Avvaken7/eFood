import React from 'react';

import icon from '../../assets/subscribe_icon.svg';
import styles from './subscribe.module.css';

const Subscribe = () => {
    return (
        <section className={styles.subscribe}>
            <div className={styles.container}>
                <div className={styles.contentBlock}>
                    <h3>Subscribe to the Latest Offer</h3>
                    <p className={styles.contentText}>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                    <form action="submit" className={styles.form}>
                        <input type="text" placeholder='Enter your email addres'/>
                        <button type='submit' className={styles.buttonSubmit}>
                            <img src={icon} alt="subscribe" />
                            Subscribe
                        </button>
                    </form>
                </div>   
            </div>            
        </section>
    );
};

export default Subscribe;