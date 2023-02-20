import {useContext, useEffect, useRef} from 'react';
import {CartContext, ModalContext} from "../../pages/Root.jsx";
import cartTotal from "../../utils/cartTotal.js";
import CartItem from "../cartItem/CartItem.jsx";
import formatNumber from "../../utils/formatNumber.js";

const CartModal = () => {
    const { isModalActive, toggleModal } = useContext(ModalContext);
    const cart = useContext(CartContext);

    const overlayRef = useRef();

    const total = cartTotal(cart.cartItems);

    const closeModal = (e) => {
        if (e.target === overlayRef.current) {
            toggleModal();
        }
    };

    useEffect(() => {
        if (isModalActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Unmount
        return () => (document.body.style.overflow = '');
    }, [isModalActive]);


    return (
        <div
            onClick={closeModal}
            ref={overlayRef}
            className={`${isModalActive ? "overlay active" : "overlay"}`}
        >
            <div className="modal">
                <div className="modal-header">
                    <h2>Корзина</h2>
                </div>

                <div className="modal-body">
                    <div className="cart-items">
                        {cart.cartItems.map((item) => {
                            return <CartItem key={item.id} item={item}/>;
                        })}
                    </div>
                </div>

                <div className="modal-footer">
                    <div className="total">
                        <div className="row">
                            <span>Итого:</span>
                            <span className="price">{formatNumber(total)}</span>
                        </div>
                        <div className="row">
                            <span>Скидка 20%:</span>
                            <span className="price">1234</span>
                        </div>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;