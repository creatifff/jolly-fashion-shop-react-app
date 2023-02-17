import React, {useEffect, useState} from 'react';
import StorageService from "../services/StorageService.js";


const useCart = (initialValue = [], key = 'cart') => {
    const [cartItems, setCartItems] = useState(initialValue);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, {...item, id: Date.now()}]);
    }

    const removeCartItemById = (id) =>
        setCartItems((prev) => {
            prev = [...prev];
            prev = prev.filter((item) => item.id !== id);
            return prev;
        });

        useEffect(() => {
            if (!StorageService)
        })
}

const UseCart = () => {
    return (
        <div>

        </div>
    );
};

export default UseCart;