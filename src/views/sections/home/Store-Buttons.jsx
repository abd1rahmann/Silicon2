import React from 'react'
import AppStore from "../../../images/appstore.svg";
import GooglePlay from "../../../images/googleplay.svg";

const StoreButtons = () => {
    return (
        <div className="store-buttons">
                <img src={AppStore} alt="app store logo"/>
                <img src={GooglePlay} alt="google play logo"/>
        </div>
    )
}
export default StoreButtons
