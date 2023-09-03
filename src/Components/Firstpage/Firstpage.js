import React from 'react'
import './Firstpage.css';

const Firstpage = () => {
    return (
        <div className="home-container">
            <div className="background-image"></div>
            <div className="content">
                <h1 className="title">Welcome to Flash</h1>
                <p className="description">We review and sell a range of big and oversized luxury
                    watches that combine stunning looks with incredible values
                    to give you something extra specail to wear upon your wrist.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default Firstpage




