import React, { useState } from 'react';

import Tab from '../../components/tabs/Tab';

import TabContentBurgers from '../../components/tabsContent/TabContentBurgers'
import TabContentPizza from '../../components/tabsContent/TabContentPizza';
import TabContentHotdogs from '../../components/tabsContent/TabContentHotdogs';
import TabContentSetMenu from '../../components/tabsContent/TabContentSetMenu';
import TabContentAsian from '../../components/tabsContent/TabContentAsian';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBurger,
    faHotdog,
    faPizzaSlice,
    faShrimp,
    faUtensils
} from '@fortawesome/free-solid-svg-icons';

import styles from './popularCategory.module.css';


const PopularCategory = () => { //TODO: add slider to component when a count of tabs up!

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <section className={styles.popular}>
                <div className='container'>
                    <h2 className={styles.popularTitle}>Our popular <span className='helpColor'>Category</span></h2>
                    <div className={styles.popularWrapper}>
                        <ul className={styles.popularTabs}>
                            <Tab id='tab1' activeTab={activeTab} setActiveTab={setActiveTab}>
                                <FontAwesomeIcon icon={faBurger} size={'2x'} title={'burger'} />
                                <span className={styles.hidden}>burger</span>
                            </Tab>
                            <Tab id='tab2' activeTab={activeTab} setActiveTab={setActiveTab} >
                                <FontAwesomeIcon icon={faPizzaSlice} size={'2x'} title={'pizza'} />
                                <span className={styles.hidden}>pizza</span>
                            </Tab>
                            <Tab id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} >
                                <FontAwesomeIcon icon={faHotdog} size={'2x'} title={'hotdog'} />
                                <span className={styles.hidden}>hotdog</span>
                            </Tab>
                            <Tab id='tab4' activeTab={activeTab} setActiveTab={setActiveTab} >
                                <FontAwesomeIcon icon={faShrimp} size={'2x'} title={'asian food'} />
                                <span className={styles.hidden}>asian food</span>
                            </Tab>
                            <Tab id='tab5' activeTab={activeTab} setActiveTab={setActiveTab} >
                                <FontAwesomeIcon icon={faUtensils} size={'2x'} title={'set menu'} />
                                <span className={styles.hidden}>set menu</span>
                            </Tab>
                        </ul>
                        <div className={styles.popularTabsContent}>
                            <TabContentBurgers id='tab1' activeTab={activeTab} />
                            <TabContentPizza id='tab2' activeTab={activeTab} />
                            <TabContentHotdogs id='tab3' activeTab={activeTab} />
                            <TabContentAsian id='tab4' activeTab={activeTab} />
                            <TabContentSetMenu id='tab5' activeTab={activeTab} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default PopularCategory;