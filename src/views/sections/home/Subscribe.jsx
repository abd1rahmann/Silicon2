import React from 'react'
import Notification from '../../../images/icons/notification.svg'
import SubscriberButton from "../global/SubscriberButton.jsx";

const Subscribe = () => {
    return (
        <div className="container">
            <div className="subscriber">
                    <span>
                        <img id="subscriber-bell-icon" src={Notification} alt="subscriber icon"/>
                        <h5>Subscribe to our newsletter to stay informed about latest updates</h5>
                    </span>
                <SubscriberButton value="Subscribe"/>
            </div>
        </div>
    )
}
export default Subscribe
