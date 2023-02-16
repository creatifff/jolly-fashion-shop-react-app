import React, {useState} from 'react';
import banner1 from '../../assets/banner1.svg';
import banner2 from '../../assets/banner2.svg';
import banner3 from '../../assets/banner1.svg';
import banner4 from '../../assets/banner2.svg';
import Slide from "./slide/Slide.jsx";

const initialItemsState = [
    {
        id: 1,
        background: banner1,
        title: 'Spring Collection',
        subtitle: '-30%',
        button: {
            url: '/',
            text: 'для него'
        }
    },
    {
        id: 2,
        background: banner2,
        title: 'Spring Style',
        subtitle: '-25%',
        button: {
            url: '/',
            text: 'для нее'
        }
    },
    {
        id: 3,
        background: banner3,
        title: 'Spring Collection',
        subtitle: '-30%',
        button: {
            url: '/',
            text: 'для него'
        }
    },
    {
        id: 4,
        background: banner4,
        title: 'Spring Collection',
        subtitle: '-30%',
        button: {
            url: '/',
            text: 'для него'
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