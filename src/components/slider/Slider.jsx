import {useState} from 'react';
import banner1 from '../../assets/banner1.svg';
import banner2 from '../../assets/banner2.svg';
import banner3 from '../../assets/banner3.svg';
import banner4 from '../../assets/banner4.svg';
import Slide from "./slide/Slide.jsx";

const initialItemsState = [
    {
        id: 1,
        background: banner4,
        title: 'Подарки для него',
        subtitle: '-30%',
        button: {
            url: '/',
            text: 'перейти'
        }
    },
    {
        id: 2,
        background: banner3,
        title: 'Лучшее детям',
        subtitle: '-70%',
        button: {
            url: '/',
            text: 'в приложении'
        }
    },
    {
        id: 3,
        background: banner2,
        title: 'Коллекция 2023',
        subtitle: '-45%',
        button: {
            url: '/',
            text: 'для нее'
        }
    },
    {
        id: 4,
        background: banner1,
        title: 'Скидка на вторую вещь',
        subtitle: '50%',
        button: {
            url: '/',
            text: 'смотреть'
        }
    },
]

const Slider = () => {

    const [items, setItems] = useState(initialItemsState);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

    return (
        <div>
            <section className="slider">
                <div className="wrapper">
                    <div className="slides">
                        <Slide slide={items[currentIndex]}/>
                    </div>


                    <div className="controls">

                            <button onClick={prev} className="prev">
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <button onClick={next} className="next">
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Slider;