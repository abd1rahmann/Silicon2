import React from 'react'
import QuoteIcon from '../../../images/icons/quotes.png'
import QuoteAuthor_1 from '../../../images/blobs/fannie-summers.png'
import QuoteAuthor_2 from '../../../images/blobs/albert-flores.png'
import StarRating_1 from '../../../images/icons/rating-1.png'
import StarRating_2 from '../../../images/icons/rating-2.png'
import ArrowButton from "../global/ArrowButton.jsx";

const cardInfo = [
    {
        body: "Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.\n" +
            "                Laoreet\n" +
            "                posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. " +
            "Montes justo\n" +
            "                turpis\n" +
            "                sit amet.",
        author: "Fannie Summers",
        title: "Designer"
    },
    {
        body: "Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. " +
            "Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.",
        author: "Albert Flores",
        title: "Developer"
    }
]

const Testimonials = () => {
    return (
        <div id="testimonials-bg">
            <div className="container">
                <div id="testimonials">
                    <div id="testimonials-left-column">
                        <h1>Clients are Loving Our App</h1>
                        <div id="testimonial-arrow-buttons">
                            <ArrowButton direction="left"/>
                            <ArrowButton direction="right"/>
                        </div>
                    </div>
                    <TestimonialCard/>
                </div>
            </div>
        </div>
    )
}

const TestimonialCard = () => {
    return (
        <div id="testimonial-cards">
            <div className="testimonial-card">
                <img className="card-quote-icon" src={QuoteIcon} alt="quote icon"/>
                <img src={StarRating_1} alt="4 star rating"/>
                <p className="text-lg">{cardInfo[0].body}</p>
                <div className="testimonial-author">
                    <img src={QuoteAuthor_1} alt="author"/>
                    <span>
                        <h6>{cardInfo[0].author}</h6>
                        <p className="text-s">{cardInfo[0].title}</p>
                    </span>
                </div>
            </div>
            <div className="testimonial-card">
                <img className="card-quote-icon" src={QuoteIcon} alt="quote icon"/>
                <img src={StarRating_2} alt="5 star rating"/>
                <p className="text-lg">{cardInfo[1].body}</p>
                <div className="testimonial-author">
                    <img src={QuoteAuthor_2} alt="author"/>
                    <span>
                        <h6>{cardInfo[1].author}</h6>
                        <p className="text-s">{cardInfo[1].title}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Testimonials
