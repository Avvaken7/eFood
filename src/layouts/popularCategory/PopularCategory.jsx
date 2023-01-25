import React from 'react';

import Tab from '../../components/tabs/Tab';
import TabList from '../../components/tabsList/TabList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBurger, 
    faHotdog, 
    faPizzaSlice, 
    faShrimp, 
    faUtensils 
} from '@fortawesome/free-solid-svg-icons';

import burger from '../../assets/burgers/burger1.svg';

import styles from './popularCategory.module.css';


const PopularCategory = () => {

    const listOftabs = [
        { name: 'burger', icon: < FontAwesomeIcon icon={faBurger} size={'2x'} /> },
        { name: 'pizza', icon: < FontAwesomeIcon icon={faPizzaSlice} size={'2x'} /> },
        { name: 'hotdog', icon: <FontAwesomeIcon icon={faHotdog} size={'2x'} /> },
        { name: 'asian food', icon: <FontAwesomeIcon icon={faShrimp} size={'2x'} /> },
        { name: 'set menu', icon: <FontAwesomeIcon icon={faUtensils} size={'2x'} /> }
    ]

    const itemTabsList = [
        {},
    ]

    return (
        <>
            <section className={styles.popular}>
                <div className={styles.container}>
                    <h2 className={styles.popularTitle}>Our popular <span className={styles.helpColor}>Category</span></h2>
                    <ul className={styles.popularTabs}>
                        {
                            listOftabs.map(item =>
                                <Tab key={item.name}>
                                    {item.icon} {item.name}
                                </Tab>
                            )
                        }                        
                    </ul>
                    <div className={styles.popularTabsList}>
                        <TabList 
                            img={burger}
                            title={'Cheeseburger With Salad'}
                            price={'18.00'}
                        />
                        <TabList 
                            img={burger}
                            title={'Cheeseburger With Salad'}
                            price={'18.00'}
                        />     
                        <TabList 
                            img={burger}
                            title={'Cheeseburger With Salad'}
                            price={'18.00'}
                        />     
                        <TabList 
                            img={burger}
                            title={'Cheeseburger With Salad'}
                            price={'18.00'}
                        />     
                        <TabList 
                            img={burger}
                            title={'Cheeseburger With Salad'}
                            price={'18.00'}
                        />     
                    </div>
                </div>

            </section>
        </>
    );
};

export default PopularCategory;