import React from 'react';

import ItemCard from '../itemCard/ItemCard';
import { listOfProducts } from '../../ProductsArray';

const TabContentAsian = ({ tabId, activeTab }) => {

    return (
        activeTab === tabId && listOfProducts.slice(0, 5).map(item => (
            <div className='listItem' key={item.id}>
                <ItemCard item={item} />
            </div>
        ))
    );
};

export default TabContentAsian;