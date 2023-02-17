import React from 'react';

const CartModal = () => {
    return (
        <div className="overlay">
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                </header>

                <div className="modal-body">
                    <div className="cart-items">

                    </div>
                </div>

                <footer className="modal-footer">
                    <div className="total">
                        <div className="row">
                            <span>Итого:</span>
                            <span className="price">1234 руб.</span>
                        </div>
                        <div className="row">
                            <span>Скидка 20%:</span>
                            <span className="price">1234 руб.</span>
                        </div>
                    </div>
                    <button>Оформить заказ</button>
                </footer>
            </div>
        </div>
    );
};

export default CartModal;