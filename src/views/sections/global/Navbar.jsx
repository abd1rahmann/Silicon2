import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom";
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'
import User from '../../../images/icons/user.svg'
import Hamburger from '../../../images/icons/bx-menu.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [toggleMobileSwitch, setToggleMobileSwitch] = useState(true)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleMobileTheme = () => {
        setToggleMobileSwitch(!toggleMobileSwitch);
    }

    return (
        <div className="container">
            <header className={`navbar ${isOpen ? 'active' : ''}`}>
                <div className="site-navigation">
                    <Link id="logo" to="/">
                        <img src={Logo} alt="silicon logotype"/>
                    </Link>
                    <nav id="menu">
                        <NavLink className="nav-link" to="/#overview">Overview</NavLink>
                        <NavLink className="nav-link" to="/#features">Features</NavLink>
                        <Link className="nav-link" to="/news">News</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="site-settings">
                    <div id="theme-mode" className="theme-switch">
                        <label htmlFor="theme-switch-mode">Light</label>
                        <label className="switch">
                            <input id="theme-switch-mode" type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <label htmlFor="theme-switch-mode">Dark</label>
                        <Link to="/signin">
                            <button id="sign-in-button" className="primary-button"><img src={User} alt="user"/> <span>Sign in / up</span>
                            </button>
                        </Link>
                    </div>
                    <button onClick={toggleMenu} className="hamburger-menu">
                        <img className="mobile-menu" src={Hamburger} alt="mobile menu"/>
                    </button>
                </div>
            </header>
            {isOpen && (
                <nav id="mobile-menu" className={isOpen ? 'active' : ''}>

                    <Link id="mobile-navbar-overview" className="nav-link mobile-item hidden-lg" to="/">
                        <i className="fa-regular fa-house"></i>
                        <p>Overview</p>
                    </Link>

                    <Link id="mobile-navbar-features" className="nav-link mobile-item hidden-lg" to="/">
                        <i className="fa-thin fa-crystal-ball"></i>
                        <p>Features</p>
                    </Link>

                    <Link id="mobile-navbar-news" className="nav-link mobile-item hidden-lg" to="/news">
                        <i className="fa-solid fa-rss"></i>
                        <p>News</p>
                    </Link>

                    <Link id="mobile-navbar-contact" className="nav-link mobile-item hidden-lg" to="/contact">
                        <i className="fa-regular fa-comments-question"></i>
                        <p>Contact</p>
                    </Link>

                    <div id="mobile-toggle-switch" onClick={toggleMobileTheme}
                         className={`mobile-item ${toggleMobileSwitch ? 'inactive' : 'active'}`}>
                        <div className="nav-link">
                            {toggleMobileSwitch && <i id="mobile-sun" className="fa-regular fa-sun"></i>}
                            {!toggleMobileSwitch && <i id="mobile-moon" className="fa-regular fa-moon"></i>}
                            <p>{toggleMobileSwitch ? 'Light' : 'Dark'}</p>
                        </div>
                    </div>

                    <Link id="mobile-sign-in-button" className="nav-link mobile-item" to="*">
                        <i id="mobile-sign-in-icon" className="fa-regular fa-user"></i>
                        <p>Sign in</p>
                    </Link>
                </nav>
            )}
        </div>
    )
}


export default Navbar
