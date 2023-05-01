import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import Button from '../../components/button/Button';
import ItemCartRow from '../../components/itemCartRow/ItemCartRow';

import styles from './cart.module.css';

const Cart = () => {

    const cart = useContext(CartContext);
    const countOfItem = cart.getItemCount();
    
    return (
        <>
            <div className="container">
                {
                    countOfItem > 0 ?
                        <table className={styles.cartTable}>
                            <caption>Your Cart Products</caption>
                            <thead className={styles.cartTableHead}>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <>
                                    {
                                        cart.items.map((currentItem, i) => (
                                            <ItemCartRow
                                                key={i}
                                                id={currentItem.id}
                                                quantity={currentItem.quantity}>
                                            </ItemCartRow>
                                        ))
                                    }
                                </>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{cart.getTotalCost().toFixed(2)}$</strong></td>
                                    <td><Button variant={'success'}>Purchase</Button></td>
                                </tr>
                            </tbody>
                        </table>
                        :
                        <h1 className={styles.title}>There are no items in your cart</h1>
                }
            </div>
        </>
    );
};

export default Cart;