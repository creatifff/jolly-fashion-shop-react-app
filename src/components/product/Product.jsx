import {useContext} from 'react';
import {BagIcon} from "../Icons/Icons";
import {CartContext} from "../../pages/Root.jsx";
import formatNumber from "../../utils/formatNumber.js";

const Product = ({product}) => {

    const {addToCart} = useContext(CartContext);

    return (
        <div className="product">
            <img src={product.img} alt={product.title}/>
            <h3>{product.title}</h3>
            <div className="product__footer">
                <p>{formatNumber(product.price)}</p>
                <button onClick={addToCart.bind(this, product)}>
                    <BagIcon size={18}/>
                </button>
            </div>
        </div>
    );
};

export default Product;