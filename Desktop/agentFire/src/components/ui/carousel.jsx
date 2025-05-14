import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="/Users/fanistsikriteas/Desktop/Στιγμιότυπο οθόνης 2024-03-16, 8.51.08 μμ" alt="Image 1" />
            </div>
            <div>
                <img src="/path/to/image2.jpg" alt="Image 2" />
            </div>
            <div>
                <img src="/path/to/image3.jpg" alt="Image 3" />
            </div>
        </Slider>
    );
};

export default Carousel;