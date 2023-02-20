import {useContext} from 'react';
import {CartContext} from "../../pages/Root.jsx";
import {TrashIcon} from "../Icons/Icons";
import formatNumber from "../../utils/formatNumber.js";


const CartItem = ({item}) => {
    const {removeCartItemById} = useContext(CartContext);

    return (
        <div className="cart-item">
            <img src={item.img} alt={item.title}/>
            <div className="cart-item__content">
                <h4>{item.title}</h4>
                <p>{formatNumber(item.price)}</p>
            </div>
            <button onClick={removeCartItemById.bind(this, item.id)}>
                <TrashIcon size={22}/>
            </button>
        </div>
    );
};

export default CartItem;