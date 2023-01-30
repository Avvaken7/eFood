import React from 'react';

import testimonialsImg from '../../assets/testimonials.png';

import styles from './testimonials.module.css';
const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2 className={styles.testimonialsTitle}>
                    What Our Client Are <span className={styles.helpColor}>Saying</span>
                </h2>
                <div className={styles.testimonialsContent}>
                   
                        <img src={testimonialsImg} alt="testimonial" />
                  
                    <div className={styles.testimonialsSlider}>
                        <div>
                            <p className={styles.quote}>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                            <span className={styles.author}>Anglina Jole</span>
                            <span className={styles.authorRole}>Food lover</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;