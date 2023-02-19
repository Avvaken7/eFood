import React, { useState } from 'react';

import icon from '../../assets/subscribe_icon.svg';
import styles from './subscribe.module.css';

const Subscribe = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const validateForm = (e) => {
        if (e.target?.value && e.target.value.match(isValidEmail)) {
            setError(false);
            setInput(e.target.value);
        } else {
            setError(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input && input.match(isValidEmail)) {
            saveEmail(input);
            setInput("Thanks for subscribing!");
        } else {
            console.log("Email invalid!");
        }
    };

    const saveEmail = (input) => {
        console.log("Email saved: ", input);
    };

    return (
        <section className={styles.subscribe}>
            <div className='container'>
                <div className={styles.contentBlock}>
                    <h3>Subscribe to the Latest Offer</h3>
                    <p className={styles.contentText}>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                    <form action="submit" className={styles.form}>
                        <input 
                            type="email" 
                            onChange={validateForm} 
                            placeholder='Enter your email addres' 
                            className={error ? styles.error : styles.inputForm}
                            required />
                        <button type="submit" onClick={handleSubmit} className={styles.buttonSubmit}>
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