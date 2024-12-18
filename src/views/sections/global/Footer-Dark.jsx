import React, {useState} from 'react'
import Logo from '../../../images/logo/silicon-logo-dark_theme.svg'
import {Link} from "react-router-dom";
import SubscriberButton from "./SubscriberButton.jsx";

const FooterDark = () => {
    const [socialLinksAccordion, setSocialLinksAccordion] = useState(false);
    const [internalLinksAccordion, setInternalLinksAccordion] = useState(false);
    const toggleSocialLinks = () => {
        setSocialLinksAccordion(!socialLinksAccordion);
    }

    const toggleInternalLinks = () => {
        setInternalLinksAccordion(!internalLinksAccordion);
    }

    return (
        <div id="footer-dark-bg">
            <div className="container">
                <div id="footer-dark">
                    <div id="footer-dark-subscription">
                        <Link id="footer-dark-logo" className="logo" to="/home"><img src={Logo} alt="silicon logotype"/></Link>
                        <p id="footer-text">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit.
                            Lacus, eget eu vitae
                            nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                            elementum
                            dolor ullamcorper sodales ultrices eros. </p>
                        <h6>Subscribe to our newsletter</h6>
                        <SubscriberButton value="Subscribe"/>
                        <p id="dark-copyright">2024. All rights reserved. Silicon Template.</p>
                    </div>
                    <div id="footer-links">
                        <div className="site-links">
                            <ul>
                                <Link to="/" className="Link">Home</Link>
                                <Link to="#" className="Link">Services</Link>
                                <Link to="#" className="Link">Our Clients</Link>
                                <Link to="#" className="Link">Testimonials</Link>
                                <Link to="/news" className="Link">News</Link>
                            </ul>
                            <ul>
                                <Link to="#" className="Link">Terms & Conditions</Link>
                                <Link to="#" className="Link">Privacy Policy</Link>
                            </ul>
                        </div>
                        <div className="site-links">
                            <ul>
                                <Link to="#" className="Link">Facebook</Link>
                                <Link to="#" className="Link">LinkedIn</Link>
                                <Link to="#" className="Link">Twitter</Link>
                                <Link to="#" className="Link">Instagram</Link>
                            </ul>
                        </div>
                        <div id="footer-contact">
                            <p>Contact Us</p>
                            <a className="email-link" href="#">example@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div id="dark-footer-mobile-accordion">
                    <div className="dark-footer-accordion-item">
                        <div className="accordion-header">
                            <button onClick={toggleSocialLinks}>
                                <p>Our social links<p>{socialLinksAccordion ? '-' : '+'} </p></p>
                            </button>
                        </div>
                        <div className={`social-links-accordion ${socialLinksAccordion ? 'active' : 'inactive'}`}>
                            <ul>
                                <Link to="#" className="Link">Facebook</Link>
                                <Link to="#" className="Link">LinkedIn</Link>
                                <Link to="#" className="Link">Twitter</Link>
                                <Link to="#" className="Link">Instagram</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="dark-footer-accordion-item">
                        <div className="accordion-header">
                            <button onClick={toggleInternalLinks}>
                                <p>Our internal links <p>{internalLinksAccordion ? '-' : '+'} </p></p></button>
                        </div>
                        <div className={`internal-links-accordion ${internalLinksAccordion ? 'active' : 'inactive'}`}>
                            <ul>
                                <Link to="/" className="Link">Home</Link>
                                <Link to="#" className="Link">Services</Link>
                                <Link to="#" className="Link">Our Clients</Link>
                                <Link to="#" className="Link">Testimonials</Link>
                                <Link to="/news" className="Link">News</Link>
                            </ul>
                            <ul>
                                <Link to="#" className="Link">Terms & Conditions</Link>
                                <Link to="#" className="Link">Privacy Policy</Link>
                            </ul>
                            <div id="footer-contact">
                                <p>Contact Us</p>
                                <a className="email-link" href="#">example@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterDark
