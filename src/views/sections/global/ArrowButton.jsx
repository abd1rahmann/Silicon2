import React from 'react'
import Arrow from '../../../images/icons/down-arrow.svg'

const ArrowButton = ({ direction, isActive, onClick }) => {
    let rotationDegrees = 0;
    switch (direction) {
        case 'left':
            rotationDegrees = 90;
            break;
        case 'up':
            rotationDegrees = 180;
            break;
        case 'right':
            rotationDegrees = -90;
            break;
        case 'down':
            rotationDegrees = 0;
            break;
        default:
            rotationDegrees = 0;
    }

    return (
        <div className={`arrow-button ${isActive ? 'active' : ''}`}>
            <button style={{ transform: `rotate(${rotationDegrees}deg)`, transition: 'transform 0.2s ease' }} onClick={onClick ? onClick : undefined}>
                <img src={Arrow} alt="arrow" />
            </button>
        </div>
    );
};
export default ArrowButton
