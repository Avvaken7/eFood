import React from 'react';
import Button from '../../components/button/Button';
import image from '../../assets/scooter.png';

import styles from './main.module.css';

const Main = () => {
    return (
        <>
            <main>
                <div className={styles.container}>
                    <section className={styles.content}>
                        <div className={styles.contentText}>
                            <h1 className={styles.contentTitle}>
                                super fast <span className={styles.helpColor}>food delivery </span>service
                            </h1>
                            <p className={styles.contentDescription}>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
                            <div className={styles.cta}>
                                <Button
                                    variant={'primary'}>
                                        Explore Food
                                </Button>
                                <a href="/" className={styles.ctaLink}>Download App</a>
                            </div>
                        </div>
                        <div className={styles.contentImg}>
                            <img src={image} alt="scooter guy" />                           
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Main;