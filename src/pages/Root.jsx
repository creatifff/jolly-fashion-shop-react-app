import React, {createContext, useState} from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

export const ModalContext = createContext({});
export const CartContext = createContext({});


const Root = () => {
    const [isModalActive, setIsModalActive] = useState(false);



    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;