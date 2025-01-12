import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import prodImage from "../../assets/main-prod-2.png";

function ProductCarousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 5000,
  //   cssEase: "linear",
  //   nextArrow: ">",
  //   prevArrow: "<",
  // };

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        <div>
          <img src={prodImage} alt="product" className="rounded-xl w-full" />
        </div>
        <div>
          <img src={prodImage} alt="product" className="rounded-xl w-full" />
        </div>
      </Slider>
      <div className="pt-6">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="gap-2"
        >
          <div>
            <img src={prodImage} alt="product" className="rounded-xl" />
          </div>
          <div>
            <img src={prodImage} alt="product" className="rounded-xl" />
          </div>
          <div>
            <img src={prodImage} alt="product" className="rounded-xl" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ProductCarousel;
