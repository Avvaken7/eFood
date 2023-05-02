import beefBulgogi from './assets/asian/BeefBulgogi.webp';
import gaengKiewWanGoong from './assets/asian/Gaeng-Kiew-Wan-Goong.webp';
import ramen from './assets/asian/ramen.webp';
import sushi from './assets/asian/sushi.webp';
import wontonNoodleSoup from './assets/asian/wonton-noodle-soup.webp';

import burger1 from './assets/burgers/burger1.webp';
import burger2 from './assets/burgers/burger2.webp';
import burger3 from './assets/burgers/burger3.webp';
import burger4 from './assets/burgers/burger4.webp';
import burger5 from './assets/burgers/burger5.webp';

import france from './assets/hotdogs/france.webp';
import michigan from './assets/hotdogs/michigan.webp';
import coney from './assets/hotdogs/coney.webp';
import italian from './assets/hotdogs/Italian.webp';
import chili from './assets/hotdogs/chili.webp';

import bafallo from './assets/pizza/bafallo.webp';
import carbonara from './assets/pizza/carbonara.webp';
import hawaiian from './assets/pizza/hawaiian.webp';
import margarita from './assets/pizza/margarita.webp';
import peperoni from './assets/pizza/peperoni.webp';

import free from './assets/setMenu/freepotates.webp';
import salmon from './assets/setMenu/salmon.webp';
import bbq from './assets/setMenu/bbq.webp';
import bolognese from './assets/setMenu/spaghetti-bolognese.webp';
import carbonaraSp from './assets/setMenu/spaghetti-carbonara.webp';

const listOfProducts = [
    { id: 1, title: 'Beef Bulgogi', img: `${beefBulgogi}`, price: 41 },
    { id: 2, title: 'Gaeng Kiew Wan Goong', img: `${gaengKiewWanGoong}`, price: 35 },
    { id: 3, title: 'Ramen', img: `${ramen}`, price: 18 },
    { id: 4, title: 'Sushi', img: `${sushi}`, price: 20 },
    { id: 5, title: 'Wonton Noodle Soup', img: `${wontonNoodleSoup}`, price: 38 },
    { id: 6, title: 'Cheeseburger With Salad', img: `${burger1}`, price: 18 },
    { id: 7, title: 'Beef Burger', img: `${burger2}`, price: 15 },
    { id: 8, title: 'Royel Cheeseburger', img: `${burger3}`, price: 16 },
    { id: 9, title: 'Black Gambugrer ', img: `${burger4}`, price: 15 },
    { id: 10, title: 'Chicken Burger ', img: `${burger5}`, price: 15 },
    { id: 11, title: 'France HotDog', img: `${france}`, price: 10 },
    { id: 12, title: 'Michigan HotDog', img: `${michigan}`, price: 12 },
    { id: 13, title: 'Coney HotDog', img: `${coney}`, price: 11 },
    { id: 14, title: 'Italian HotDog', img: `${italian}`, price: 10 },
    { id: 15, title: 'Chili HotDog ', img: `${chili}`, price: 21 },
    { id: 16, title: 'Pizza Bafallo', img: `${bafallo}`, price: 25 },
    { id: 17, title: 'Pizza Carbonara', img: `${carbonara}`, price: 35 },
    { id: 18, title: 'Hawaiian Pizza', img: `${hawaiian}`, price: 30 },
    { id: 19, title: 'Pizza Margarita ', img: `${margarita}`, price: 25 },
    { id: 20, title: 'Pizza Peperoni ', img: `${peperoni}`, price: 21 },
    { id: 21, title: 'Spaghetti Carbonara', img: `${carbonaraSp}`, price: 22 },
    { id: 22, title: 'Free Potates', img: `${free}`, price: 10 },
    { id: 23, title: 'Salmon Steak', img: `${salmon}`, price: 50 },
    { id: 24, title: 'Barbecue', img: `${bbq}`, price: 52 },
    { id: 25, title: 'Spaghetti Bolognese', img: `${bolognese}`, price: 23 }
]

    function getItemData(id) {
        let itemData = listOfProducts.find(item => item.id === id);
    
        if (itemData === undefined) {
            console.log('item does no exist for ID:' + id)
            return undefined
        }
    
        return itemData;
    
    }

export { listOfProducts, getItemData };


