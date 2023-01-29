import React, { useState } from 'react';

import Tab from '../../components/tabs/Tab';
import TabContentBurgers from '../../components/tabsContent/burgers/TabContentBurgers';
import TabContentPizza from '../../components/tabsContent/pizza/TabContentPizza';
import TabContentHotdogs from '../../components/tabsContent/hotdog/TabContentHotdogs';
import TabContentSetMenu from '../../components/tabsContent/setMenu/TabContentSetMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBurger,
    faHotdog,
    faPizzaSlice,
    faShrimp,
    faUtensils
} from '@fortawesome/free-solid-svg-icons';

import styles from './popularCategory.module.css';
import TabContentAsian from '../../components/tabsContent/asianFood/TabContentAsian';


const PopularCategory = () => { //TODO: add slider to component when a count of tabs up!

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <section className={styles.popular}>
                <div className={styles.container}>
                    <h2 className={styles.popularTitle}>Our popular <span className={styles.helpColor}>Category</span></h2>
                    <ul className={styles.popularTabs}>
                        <Tab id='tab1' activeTab={activeTab} setActiveTab={setActiveTab}>
                            <FontAwesomeIcon icon={faBurger} size={'2x'} />
                            burger
                        </Tab>

                        <Tab id='tab2' activeTab={activeTab} setActiveTab={setActiveTab} >
                            <FontAwesomeIcon icon={faPizzaSlice} size={'2x'} />
                            pizza
                        </Tab>

                        <Tab id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} >
                            <FontAwesomeIcon icon={faHotdog} size={'2x'} />
                            hotdog
                        </Tab>

                        <Tab id='tab4' activeTab={activeTab} setActiveTab={setActiveTab} >
                            <FontAwesomeIcon icon={faShrimp} size={'2x'} />
                            asian food
                        </Tab>

                        <Tab id='tab5' activeTab={activeTab} setActiveTab={setActiveTab} >
                            <FontAwesomeIcon icon={faUtensils} size={'2x'} />
                            set menu
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
            </section>
        </>
    );
};

export default PopularCategory;