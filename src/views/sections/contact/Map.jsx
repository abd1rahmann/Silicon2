import React from 'react'
import MapSymbol from '../../../images/contact/bx-map.svg'
import Phone from '../../../images/contact/bx-phone-call.svg'
import Clock from '../../../images/contact/bx-time-five.svg'
import SocialLinks from "../global/SocialLinks.jsx";

const Map = () => {
    return (
        <div className="container">

            <div id="map-container">
                <div id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14293.278419970502!2d15.697626704485648!3d59.82493027339397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1710173893695!5m2!1ssv!2sse"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div id="contact-addresses">
                    <div id="med-center-first">
                        <h4>Medical Center 1</h4>

                        <span className="med-center-span">
                                <img src={MapSymbol} alt="map icon"/>
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </span>

                        <span className="med-center-span">
                                <img src={Phone} alt="phone icon"/>
                                <p>(406) 555-0120</p>
                            </span>

                        <span className="med-center-span">
                                <img src={Clock} alt="clock icon"/>
                                <div>
                                    <p>Mon-Fri: 9:00 am - 22:00 am</p>
                                    <p>Sat-Sun: 9:00 am - 20:00 am</p>
                                </div>
                            </span>
                    </div>

                    <div id="med-center-second">
                        <h4>Medical Center 2</h4>
                        <span className="med-center-span">
                            <img src={MapSymbol} alt="map icon"/>
                            <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                            </span>
                        <span className="med-center-span">
                            <img src={Phone} alt="phone icon"/>
                            <p>(406) 555-0123</p>
                            </span>
                        <span className="med-center-span">
                            <img src={Clock} alt="clock icon"/>
                            <div>
                                <p>Mon-Fri: 9:00 am - 22:00 am</p>
                                <p>Sat-Sun: 9:00 am - 20:00 am</p>
                            </div>
                        </span>

                    </div>
                    <div id="contact-form-social-links"><SocialLinks/></div>
                </div>
            </div>
        </div>
    )
}
export default Map
