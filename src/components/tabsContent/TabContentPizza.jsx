import React from 'react';

import ItemCard from '../itemCard/ItemCard';
import { listOfProducts } from '../../ProductsArray';

const TabContentPizza = ({ tabId, activeTab }) => {
    
    return (
        activeTab === tabId && listOfProducts.slice(15, 20).map(item => (
            <div className='listItem' key={item.id}>
                <ItemCard item={item} />
            </div>
        ))
    );
};

export default TabContentPizza;