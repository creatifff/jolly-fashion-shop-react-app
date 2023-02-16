import React from 'react';
import {NavLink} from "react-router-dom";

const Slide = ({ slide }) => {
    return (
        <div className="slide">
            <div className="container">
            <div style={{position: 'absolute'}} className="slide__text">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <NavLink className="slide__button" to={slide.button.url}>
                    {slide.button.text}
                </NavLink>
            </div>
            </div>
            <img
                src={slide.background}
                alt={slide.title}
            />

        </div>
    );
};

export default Slide;