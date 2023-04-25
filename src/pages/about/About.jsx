import React from 'react';

import styles from './about.module.css';

const About = () => {

    return (
        <>
            <div className="container">
                <div className={styles.about}>
                    <h1 className={styles.title}>About our company</h1>
                    <p>Our company is an innovative grocery delivery service that brings fresh products straight to our customers' doorsteps. We operate in many cities worldwide, providing a convenient and fast way to get fresh groceries without leaving the comfort of your home.</p>
                    <p>We offer a wide selection of products from top producers, including fresh fruits and vegetables, dairy products, meat and fish, bakery items, beverages, and other essential goods. We strive to ensure the quality and freshness of the products we deliver directly to our customers' doors.</p>
                    <p>Our couriers are highly skilled professionals with significant experience in the delivery industry. They will always deliver your purchases promptly, safely, and with minimal delays. We work to provide maximum convenience and satisfaction for our customers, and we offer the ability to track the delivery status from a mobile device.</p>
                    <p>In our company, we aim for maximum efficiency and utilize modern technologies to improve our service. We believe that our efforts help our customers save time and money, making their shopping more convenient and enjoyable.</p>
                </div>
            </div>
        </>
    );
};

export default About;