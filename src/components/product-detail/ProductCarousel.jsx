import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { productCarouselImages } from "../../static/product-details";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const CustomArrow = ({ direction, onClick, className }) => {
  const Icon = direction === "next" ? SlArrowRight : SlArrowLeft;
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-full w-8 h-8 sm:flex hidden items-center justify-center ${
        direction === "next" ? "right-4" : "left-4"
      }`}
    >
      <Icon className="w-5 h-5 text-palette-black hover:text-red-600" />
    </button>
  );
};

function ProductCarousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    asNavFor: nav2,
  };

  const thumbnailSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: nav1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <Slider ref={slider1} {...mainSliderSettings} className="z-10">
          {productCarouselImages?.map((img) => (
            <div key={img.id} className="relative aspect-square">
              <img
                src={img.image}
                alt="product"
                className="w-full h-full object-cover sm:rounded-lg rounded-none"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="pl-1 sm:block hidden">
        <Slider variableWidth ref={slider2} {...thumbnailSliderSettings}>
          {productCarouselImages?.map((img) => (
            <div key={img.id} className="px-2">
              <div className="aspect-square">
                <img
                  src={img.image}
                  alt="product thumbnail"
                  className="w-24 object-cover rounded-lg cursor-pointer"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductCarousel;
