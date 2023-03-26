import React from 'react';

import ItemCard from '../itemCard/ItemCard';
import { listOfProducts } from '../../ProductsArray';

const TabContentSetMenu = ({ tabId, activeTab }) => {

    return (
        activeTab === tabId && listOfProducts.slice(20, 25).map(item => (
            <div className='listItem' key={item.id}>
                <ItemCard item={item} />
            </div>
        ))
    );
};

export default TabContentSetMenu;