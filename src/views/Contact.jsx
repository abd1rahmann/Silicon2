import React from 'react'
import Hero from "./sections/contact/Hero.jsx";
import Map from "./sections/contact/Map.jsx";
import FooterDark from "./sections/global/Footer-Dark.jsx";
import Navbar from "./sections/global/Navbar.jsx";
import BreadCrumb from "./sections/global/BreadCrumb.jsx";

const Contact = () => {
    return (
        <div>
            <div id="contact-bg">
                <Navbar/>
                <BreadCrumb/>
                <Hero/>
            </div>
            <Map/>
            <FooterDark/>
        </div>
    )
}
export default Contact
