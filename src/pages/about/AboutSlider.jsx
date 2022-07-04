import React from "react";
import Slider from "react-slick";
import './../../assets/css/about/aboutSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AboutSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 3000,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    autoplay: true,
    variableWidth: true,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
dots: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="about__slider">
      <div className="about__slider__main">
        <div className="about__slider__main__inner">
          <div className="about__slider__main__inner__main">
            <div className="about__slider__main__inner__main__arrow">
              <Slider {...settings}>
                <div className="about__slider__slide">
                  <p>Discover & callect extraordinary digital art and Bitakon.</p>
                </div>
                <div className="about__slider__slide">
                  <p>Discover & callect extraordinary digital art and Bitakon.</p>
                </div>
                <div className="about__slider__slide">
                  <p>Discover & callect extraordinary digital art and Bitakon.</p>
                </div>
                <div className="about__slider__slide">
                  <p>Discover & callect extraordinary digital art and Bitakon.</p>
                </div>
                <div className="about__slider__slide">
                  <p>Discover & callect extraordinary digital art and Bitakon.</p>
                </div>
                <div className="about__slider__slide">
                  <p>Discover & callect extraordinary digital art and Bitakon.</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
