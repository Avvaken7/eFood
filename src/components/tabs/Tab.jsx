import React from 'react';
import styles from './tab.module.css';

const Tab = ({ id, activeTab, setActiveTab, children }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <>
            <li
                className={`${styles.tab} ${activeTab === id ? `${styles.active}` : ""}`}
                onClick={handleClick}
            >
                {children}
            </li>
        </>
    );
};

export default Tab;