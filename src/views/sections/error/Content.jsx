import React from 'react'
import {Link} from "react-router-dom";
import HomeIcon from '../../../images/icons/error-home-icon.svg'
import Error_Background from '../../../images/error/error-background.png'

const Content = () => {
    return (
        <div className="error-container">
            <img id="error-404-logo" src={Error_Background} alt="error logo"/>
            <div id="error-test-bottom"><p className="d5">Ooops!</p>
                <p id="error-text" className="text-xl">The page you are looking for is not available.</p>
                <button id="error-button" className="primary-button">
                    <span>
                        <Link to="/"><img src={HomeIcon} alt="home icon"/>Go to homepage</Link>
                    </span>
                </button>
            </div>
        </div>
    )
}
export default Content
