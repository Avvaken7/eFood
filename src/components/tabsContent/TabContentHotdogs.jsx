import React from 'react';

import ItemCard from '../itemCard/ItemCard';
import { listOfProducts } from '../../ProductsArray';

const TabContentHotdogs = ({ tabId, activeTab }) => {


    return (
        activeTab === tabId && listOfProducts.slice(10, 15).map(item => (
            <div className='listItem' key={item.id}>
                <ItemCard item={item} />
            </div>
        ))
    );
};

export default TabContentHotdogs;