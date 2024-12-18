import React from 'react'

import CheckmarkIcon from '../../../images/features/bx-check-circle.svg';
import FeatureIcon_1 from '../../../images/features/feature_1.svg';
import FeatureIcon_2 from '../../../images/features/feature_2.svg';
import ArrowRightIcon from '../../../images/icons/arrow-right.svg'
import BottomCard from '../../../images/features/bottom-card.png';
import TopCard from '../../../images/features/top-card.png';

const Features = () => {
    return (
        <div className="container">
            <div id="features-container">
                <div id="features-top-row">
                    <h2>Make your money transfer simple and clear</h2>
                    <div id="features-top-row-list">
                        <span><img src={CheckmarkIcon} alt="checkmark"/>Banking transactions are free for you</span>
                        <span><img src={CheckmarkIcon} alt="checkmark"/>No monthly cash commission</span>
                        <span><img src={CheckmarkIcon} alt="checkmark"/>Manage payments and transactions online</span>
                    </div>
                    <button className="primary-button"><span>Learn more<img src={ArrowRightIcon} alt="right arrow"/></span>
                    </button>
                </div>
                <img className="feature-card" id="top-card" src={TopCard} alt="money transfer"/>
                <img className="feature-card" id="bottom-card" src={BottomCard} alt="payment info"/>
                <div id="features-bottom-row">
                    <h2>Receive payment from international bank details</h2>
                    <div id="features-bottom-grid">
                        <span>
                            <img className="features-icon" src={FeatureIcon_1} alt="icon"/>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </span>
                        <span>
                            <img className="features-icon" src={FeatureIcon_2} alt="icon"/>
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </span>
                    </div>
                    <button className="primary-button"><span>Learn more<img src={ArrowRightIcon} alt="right arrow"/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Features
