import React from 'react';

import styles from './tab.module.css';

const Tab = ({ children }) => {

    return (
        <>
            <li className={styles.tab}>
                {children}
            </li>
        </>
    );
};

export default Tab;