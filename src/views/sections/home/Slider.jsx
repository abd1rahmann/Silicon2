import React, {useState, useEffect} from 'react'
import CarouselImage_1 from '../../../images/mobile-howdoesitwork_1.svg'
import CarouselImage_2 from '../../../images/mobile-howdoesitwork_2.svg'
import CarouselImage_3 from '../../../images/mobile-howdoesitwork_3.svg'
import ArrowButton from "../global/ArrowButton.jsx";

const carouselImages = [CarouselImage_1, CarouselImage_2, CarouselImage_3];
const carouselContent = [
    {
        title: 'Step 1. Advanced budget management',
        content: 'Maecenas ut lacus rutrum, blandit justo eu, suscipit nisi. Pellentesque habitant morbi. ',
    },
    {
        title: 'Step 2. Latest transaction history',
        content: 'Vivamus semper ut odio a hendrerit. Quisque posuere odio est, ac vehicula.',
    },
    {
        title: 'Step 3. Transfers to people from your contact list',
        content: 'In in commodo mauris. Etiam lobortis lorem id dui dictum vehicula. Donec at turpis non justo consequat efficitur eu vitae dui. Duis metus. ',
    },
]


const Carousel = ({images, content}) => {
    const [index, setIndex] = useState(0);

    // I know we are not supposed to touch the DOM when using react, but this was the only way I knew how to do this! :(
    useEffect(() => {
        const container = document.querySelector('.slider-bottom-border');

        if (index === 0) {
            container.classList.add('one-third-width');
            container.classList.remove('two-thirds-width', 'full-width');
        } else if (index === 1) {
            container.classList.add('two-thirds-width');
            container.classList.remove('one-third-width', 'full-width');
        } else {
            container.classList.add('full-width');
            container.classList.remove('one-third-width', 'two-thirds-width');
        }
    }, [index]);
    const handlePrevious = () => {
        setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <div id="carousel-pictures">
                <ArrowButton onClick={handlePrevious} direction="left"/>
                <img className="outer-carousel-image" src={images[index]} alt="mobile"/>
                <img src={images[(index + 1) % images.length]} alt="mobile"/>
                <img className="outer-carousel-image" src={images[(index + 2) % images.length]} alt="mobile"/>
                <ArrowButton onClick={handleNext} direction="right"/>
            </div>
            <div id="carousel-content">
                <h4>{content[index].title}</h4>
                <p>{content[index].content}</p>
            </div>
        </div>
    );
};

const Slider = () => {
    return (
        <div id="slider-bg" className="slider-bottom-border">
            <div className="container">
                <div id="slider-container">
                    <h2>How Does It Work?</h2>
                    <Carousel images={carouselImages} content={carouselContent}/>
                </div>
            </div>
        </div>
    );
};

export default Slider
