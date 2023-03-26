import React, { useContext } from 'react';
import Button from '../button/Button';
import { CartContext } from '../../CartContext';
import { getItemData } from '../../ProductsArray';


const ItemCartRow = (props) => {
    const cart = useContext(CartContext);
    const { id, quantity } = props;
    const itemData = getItemData(id);

    return (
        <>
            <tr>
                <td>{itemData.title}</td>
                <td>{itemData.price}$</td>
                <td> 
                    <Button variant={'count'} onClick={() => cart.addToCart(itemData.id)}>+</Button>
                    {quantity}
                    <Button variant={'count'} onClick={() => cart.removeFromCart(itemData.id)}>-</Button>
                </td>
                <td>{(quantity * itemData.price).toFixed(2)}$</td>
                <td><Button variant={'primary'} onClick={() => cart.deleteFromCart(id)}>remove</Button></td>
            </tr>
        </>
    );
};

export default ItemCartRow;