import React from 'react'
import Showcase from "./sections/home/Showcase.jsx";
import Brands from "./sections/home/Brands.jsx";
import AppFeatures from "./sections/home/AppFeatures.jsx";
import Slider from "./sections/home/Slider.jsx";
import Features from "./sections/home/Features.jsx";
import Testimonials from "./sections/home/Testimonials.jsx";
import FooterLight from "./sections/global/Footer-Light.jsx";
import Subscribe from "./sections/home/Subscribe.jsx";
import Navbar from "./sections/global/Navbar.jsx";
import FAQ from "./sections/home/FAQ.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Showcase/>
            <Brands/>
            <AppFeatures/>
            <Slider/>
            <Features/>
            <Testimonials/>
            <FAQ/>
            <Subscribe/>
            <FooterLight/>
        </div>
    )
}
export default Home
