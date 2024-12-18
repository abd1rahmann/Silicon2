import React from 'react'
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'


const Modal = ({children}) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <img id="modal-logo" src={Logo} alt=""/>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal
