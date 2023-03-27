import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import Button from '../button/Button';

import styles from './itemCard.module.css';

const ItemCard = (props) => {
    const item = props.item;

    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(item.id);

    return (
        <>
            {
                productQuantity > 0 && <div className={styles.productQuantityCounter}>
                    {productQuantity}
                </div>
            }
            <img src={item.img} className='listItemImg' alt={item.title} />
            <span>{item.title}</span>
            <span className='price'>${item.price}.00</span>

            {
                productQuantity > 0
                    ?
                    <>
                        <div className={styles.btnWrapper}>
                            <Button variant={'card'} onClick={() => cart.removeFromCart(item.id)}>-</Button>
                            <Button variant={'card'} onClick={() => cart.addToCart(item.id)}>+</Button>
                            <Button variant={'card'} onClick={() => cart.deleteFromCart(item.id)}>x</Button>
                        </div>
                    </>
                    :
                    <Button variant={'card'} onClick={() => cart.addToCart(item.id)}>Add To Cart</Button>
            }

        </>
    );
};

export default ItemCard;