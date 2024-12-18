import React from 'react'
import Mobile from '../../../images/showcase-mobiles.svg';
import StoreButtons from "./Store-Buttons.jsx";
import ArrowButton from "../global/ArrowButton.jsx";

const Showcase = () => {
    return (
        <div id="showcase-bg">
            <div className="container">
                <div id="showcase-container">
                    <div id="showcase-body">
                        <h1 className="d4">Manage All Your Money in One App</h1>
                        <p className="text-lead">We offer you a new generation of the mobile banking. <br/>
                            Save, spend & manage money in your pocket.</p>
                        <div id="showcase-buttons">
                            <StoreButtons/>
                            <span>
                                <ArrowButton/>
                                <p className="text-s">Discover more</p>
                            </span>
                        </div>
                    </div>

                    <div id="showcase-image">
                        <img src={Mobile} alt="transactions"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Showcase
