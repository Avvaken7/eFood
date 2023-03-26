import React from 'react';
import Restaurants from '../../layouts/restaurants/Restaurants'

import styles from './servicePage.module.css';

const ServicePage = () => {
    return (
        <div className={styles.serviceWrapper}>
            <Restaurants />
        </div>

    );
};

export default ServicePage;