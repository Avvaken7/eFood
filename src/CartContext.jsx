import { createContext, useState } from "react";
import { getItemData } from './ProductsArray';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
    getItemCount: () => { }
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProduct] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setCartProduct(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProduct(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }

    }

    function deleteFromCart(id) {
        setCartProduct(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function removeFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProduct(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )
        }
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map(cartItem => {
            const productData = getItemData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    function getItemCount() {
        const itemCount = cartProducts.reduce((sum, item) => sum + item.quantity, 0)
        return itemCount;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getItemCount,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

