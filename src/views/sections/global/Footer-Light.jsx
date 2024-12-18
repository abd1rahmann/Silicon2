import React from 'react'
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'
import StoreButtons from "../home/Store-Buttons.jsx";
import SocialLinks from "./SocialLinks.jsx";
import {Link} from "react-router-dom";

const links = [
    {to: '/', text: 'Overview'},
    {to: '/', text: 'Features'},
    {to: '/news', text: 'News'},
    {to: '/contact', text: 'Contact'},
    {to: '/*', text: 'Account'}
]

const FooterLight = () => {
    return (
        <div className="container">
            <div className="light-footer">
                <Link id="logo" to="/">
                    <img src={Logo} alt="silicon logotype"/>
                </Link>
                <nav id="footer-links">
                    {links.map((link, index) =>(
                        <Link key={index} className="nav-link" to={link.to}>{link.text}</Link>
                    ))}
                </nav>
                <StoreButtons/>
                <SocialLinks/>
                <p className="text-s">
                    2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo
                    malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare
                    consectetur.
                </p>
            </div>
        </div>
    )
}
export default FooterLight