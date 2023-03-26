import React from 'react';

import ItemCard from '../itemCard/ItemCard';
import { listOfProducts } from '../../ProductsArray';

const TabContentBurgers = ({ tabId, activeTab }) => {

    return (
        activeTab === tabId && listOfProducts.slice(5, 10).map(item => (
            <div className='listItem' key={item.id}>
                <ItemCard item={item}/>
            </div>
        ))
    )
};

export default TabContentBurgers;