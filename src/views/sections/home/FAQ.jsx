import React from 'react'
import Accordion from "./Accordion.jsx";
import Phone from '../../../images/icons/faq-phone.svg'
import ChatBubble from '../../../images/icons/faq-chat-bubble.svg'
import RightArrow from '../../../images/icons/right-arrow.svg'
import RightArrowGreen from '../../../images/icons/right-arrow-green.svg'

const Faq = () => {
    return (
        <div className="container">
            <div id="faq-container">
                <div id="faq-left-column">
                    <h2>Any questions? Check out the FAQs</h2>
                    <p>Still have unanswered questions and need to get in touch?</p>

                    <div id="cards">
                        <div className="faq-card">
                            <img src={Phone} alt="phone icon"/>
                            <p>Still have questions?</p>
                            <a id="call" href="#"><span>Contact us <img src={RightArrow} alt="right arrow"/></span></a>
                        </div>

                        <div className="faq-card">
                            <img src={ChatBubble} alt="chat icon"/>
                            <p>Don't like phone calls?</p>
                            <a id="chat" href="#"><span>Contact us <img src={RightArrowGreen} alt="green right arrow"/></span></a>
                        </div>
                    </div>
                </div>
                <Accordion/>
            </div>
        </div>
    )
}
export default Faq
