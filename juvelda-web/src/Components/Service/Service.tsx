import React, { useState } from "react";
import Slider from "react-slick";
import test1 from "./images/test1.png";
import test2 from "./images/test2.png";
import test3 from "./images/test3.png";
import test4 from "./images/test4.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./styles/styles.scss";

const images = [test1, test2, test3, test4];

function Service() {

    const NextArrow = ({onClick}: any) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}: any) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const settings: any = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow onClick/>,
        prevArrow: <PrevArrow  onClick/>,
        beforeChange: (current: any, next: any) => setImageIndex(next),
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                dots: true
              }
            }
          ]
    }

    return (
        <div className="service-container">

            <div className="service-container__box">
                <div className="header">
                    <h1 className="header__text">Mūsų paslaugos</h1>
                </div>
                <div className="service-carousel">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
                                <img src={img} alt={img} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
}

export default Service;