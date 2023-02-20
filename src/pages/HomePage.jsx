import React, {useState} from 'react';
import Slider from "../components/slider/Slider.jsx";
import {SearchIcon} from "../components/Icons/Icons";
import Product from "../components/product/Product.jsx";
import PRODUCTS from "../data/products.js";
import feedbackBanner from '../assets/feedback.jpg';
import SALES from "../data/sales.js";
import Sale from "../components/sale/Sale.jsx";

const HomePage = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState('');

    const [sales, setSales] = useState(SALES);

    const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    const onChangeQuery = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <Slider/>

            <section id="catalog" className="section">
                <div className="container">
                    <header className="section-header">
                        <h2>Каталог</h2>
                        <div className="search-box">
                            <div className="icon">
                                <SearchIcon size={18}/>
                            </div>
                            <input value={query}
                                   onChange={(e) => onChangeQuery(e)}
                                   type="text"
                                   placeholder="Поиск по названию..."
                            />
                        </div>
                    </header>

                    <div className="products">
                        {
                            filteredProducts.length ? filteredProducts.map((product) => {
                                return <Product key={product.id} product={product}/>
                            }) : <h2>По запросу "{query}" ничего не найдено</h2>
                        }
                    </div>

                    <div className="feedback">
                        <div className="feedback-wrapper">
                            <h3>Скидки, акции, новинки</h3>
                            <h4>Подпишитесь!</h4>
                            <form>
                                <input placeholder="Ваш email..." type="email"/>
                                <button type="submit">Подписаться</button>
                            </form>
                        </div>
                        <img src={feedbackBanner} alt="feedback-bg"/>
                    </div>

                    <h2 className="sales-header">SALE до 70%</h2>
                    <div id="sale" className="sales">
                        {
                            sales.map((sale) => {
                                return <Sale key={sale.id} sale={sale}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;