import React, {createContext, useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import useCart from "../hooks/useCart.js";
import CartModal from "../components/cartModal/CartModal.jsx";

export const ModalContext = createContext({});
export const CartContext = createContext({});


const Root = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const cart = useCart([]);
    const toggleModal = setIsModalActive.bind(this, !isModalActive);


    return (
        <CartContext.Provider value={cart}>
            <ModalContext.Provider value={{isModalActive, toggleModal}}>
                <div>
                    <Header/>
                    <CartModal/>
                    <main>
                        <Outlet/>
                    </main>
                    <Footer/>
                </div>
            </ModalContext.Provider>
        </CartContext.Provider>
    );
};

export default Root;