import {useContext} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo-jolly.svg';
import formatNumber from "../../utils/formatNumber.js";
import cartTotal from "../../utils/cartTotal.js";
import {CartContext, ModalContext} from "../../pages/Root.jsx";

const CartButton = () => {
    const {toggleModal} = useContext(ModalContext);
    const {cartItems} = useContext(CartContext);
    const total = cartTotal(cartItems);

    return (
        <button onClick={toggleModal}>
            <span>{formatNumber(total)}</span>
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    )
}

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <NavLink className="logo__link" to="/">
                        <div className="logo">
                            <img src={logo} alt="Jolly Fashion logo"/>
                            <div>
                                <h1>Jolly <span>Fashion</span></h1>
                            </div>
                        </div>
                    </NavLink>

                    <nav className="nav">
                        <NavLink className="nav__link" to="#catalog">
                            Каталог
                        </NavLink>
                        <NavLink className="nav__link" to="#catalog">
                            Женщины
                        </NavLink>
                        <NavLink className="nav__link" to="#catalog">
                            Мужчины
                        </NavLink>
                        <NavLink className="nav__link" to="#sale">
                            SALE
                        </NavLink>
                    </nav>

                    <div className="buttons">
                        <CartButton/>
                        <NavLink to="/orders">
                            <i className="fa-solid fa-user"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;