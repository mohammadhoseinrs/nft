import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../assets/css/marketplace/players.css";
function response() {
  if (window.innerWidth < 1000 && window.innerWidth > 800) return 4;
  if (window.innerWidth < 800) return 3;
  else return 5;
}
function response2() {
  if (window.innerWidth < 1000 && window.innerWidth > 800) return 1;
  if (window.innerWidth < 800) return 2;
  else return 1;
}
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  slidesToShow: response(),
  slidesToScroll: response2(),
  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
    },
  ],
};

export default function UiSlider(props) {
  return (
    <div className="Slider__container">
      <div className="players__container">
        <Slider {...settings}>{props.children.props.children}</Slider>
      </div>
    </div>
  );
}
