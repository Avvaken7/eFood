import React from 'react';
import styles from './tab.module.css';

const Tab = ({ tabId, activeTab, setActiveTab, children }) => {

    const handleClick = () => {
        setActiveTab(tabId);
    };

    return (
        <>
            <li
                className={`${styles.tab} ${activeTab === tabId ? `${styles.active}` : ""}`}
                onClick={handleClick}
            >
               {children}
            </li>
        </>
    );
};

export default Tab;