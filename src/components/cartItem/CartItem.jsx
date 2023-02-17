import React, {useContext} from 'react';


const CartItem = ({item}) => {
    const {removeCartItemById} = useContext();

    return (
        <div className="cart-item">
            <img src={} alt=""/>
        </div>
    );
};

export default CartItem;