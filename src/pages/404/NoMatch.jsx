import React from 'react';

import styles from './NoMatch.module.css';

const NoMatch = () => {
    return (
        <>
            <div className="container">
                <div className={styles.notFoundPage}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.description}>Page is no found</h2>
                </div>
            </div>

        </>
    );
};

export default NoMatch;