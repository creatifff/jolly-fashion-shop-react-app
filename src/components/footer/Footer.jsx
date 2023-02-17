import React from 'react';
import logo from '../../assets/logo-jolly.svg';
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <div className="company__column">
                        <div className="logo">
                            <img src={logo} alt="footer-logo"/>
                            <h1>Jolly <span>Fashion</span></h1>
                        </div>
                        <p className="info">
                            JOLLY FASHION – это комфортный интернет-шопинг и более 111 розничных магазинов. 5 лет мы
                            выпускаем
                            одежду в стиле сasual для любых ситуаций, времени года и погоды, помогая покупателям создать
                            свой
                            собственный, неповторимый образ.
                        </p>
                        <div className="social">
                            <i className="fa-brands fa-vk"></i>
                            <i className="fa-brands fa-telegram"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="contacts">
                            <div className="number">
                                <p>89274156060</p>
                                <span>08:00 - 20:00</span>
                            </div>
                            <p className="mail">jollysupport@mail.ru</p>
                        </div>
                    </div>
                    <div className="nav__column">
                        <h4>Покупателю</h4>
                        <nav>
                            <NavLink to="#">Акции</NavLink>
                            <NavLink to="#">Доставка</NavLink>
                            <NavLink to="#">Возврат и обмен</NavLink>
                            <NavLink to="#">Размеры</NavLink>
                        </nav>
                    </div>
                    <div className="nav__column">
                        <h4>Клубная программа</h4>
                        <nav>
                            <NavLink to="#">Частые вопросы</NavLink>
                            <NavLink to="#">Стать участником</NavLink>
                            <NavLink to="#">Виды карт</NavLink>
                            <NavLink to="#">Правила участия</NavLink>
                        </nav>
                    </div>
                    <div className="nav__column">
                        <h4>О компании</h4>
                        <nav>
                            <NavLink to="#">Новости</NavLink>
                            <NavLink to="#">Адреса</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;