import React from 'react';
import {BagIcon} from "../Icons/Icons";

const Product = ({product}) => {
    return (
        <div className="product">
            <img src={product.img} alt={product.title}/>
            <h3>{product.title}</h3>
            <div className="product__footer">
                <p>{product.price} руб.</p>
                <button>
                    <BagIcon size={18}/>
                </button>
            </div>
        </div>
    );
};

export default Product;