import React from 'react';
import {BagIcon} from "../Icons/Icons.jsx";

const Sale = ({sale}) => {
    return (
        <div className="sale">
            <img src={sale.img} alt={sale.title}/>
            <span className="discount">{sale.discount}</span>
            <h3>{sale.title}</h3>
            <div className="sale__footer">
                <div className="sale-price">
                    <span className="first-price">{sale.first_price}</span>
                    <p className="final-price">{sale.final_price} руб.</p>
                </div>
                <button>
                    <BagIcon size={18}/>
                </button>
            </div>
        </div>
    );
};

export default Sale;