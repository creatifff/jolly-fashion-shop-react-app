import {useContext} from 'react';
import {BagIcon} from "../Icons/Icons.jsx";
import {CartContext} from "../../pages/Root.jsx";
import formatNumber from "../../utils/formatNumber.js";

const Sale = ({sale}) => {
    const {addToCart} = useContext(CartContext);

    return (
        <div className="sale">
            <img src={sale.img} alt={sale.title}/>
            <span className="discount">{sale.discount}</span>
            <h3>{sale.title}</h3>
            <div className="sale__footer">
                <div className="sale-price">
                    <span className="first-price">{sale.first_price}</span>
                    <p className="final-price">{formatNumber(sale.final_price)}</p>
                </div>
                <button onClick={addToCart.bind(this, sale)}>
                    <BagIcon size={18}/>
                </button>
            </div>
        </div>
    );
};

export default Sale;