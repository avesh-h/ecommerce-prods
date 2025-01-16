import React, { useState } from "react";
import cartIcon from "../../assets/svgs/cart-2.svg";
import starIcon from "../../assets/svgs/Shopicons_Light_Stars.svg";
import checkIcon from "../../assets/svgs/Shopicons_Light_Checkmark.svg";
import { productsSpecification } from "../../static/product-details";
import useMobileScreen from "../../hooks/useMobileScreen";

const ProductSpecs = () => {
  const [selectedSize, setSelectedSize] = useState(
    productsSpecification.sizes?.[0]?.value
  );
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const isMobileScreen = useMobileScreen();

  return (
    <div>
      {/* ratings */}
      <div className="flex sm:justify-between justify-end items-center text-[#565656]">
        <p className="sm:flex hidden gap-1 common-underline">
          <img
            src={productsSpecification?.rating?.ratingIcon}
            alt="rating-icon"
          />
          {productsSpecification?.rating?.score}
        </p>
        <div className="flex justify-between w-full sm:hidden font-eudoxus">
          <p className="text-xs">
            4 Colors &gt;
            <span className="font-bold text-palette-black pl-1">Black</span>
          </p>
        </div>
        <p className="uppercase sm:text-base text-xs underline decoration-[1px] underline-offset-2 font-eudoxus font-normal tracking-[0.075rem] hover:opacity-75 cursor-pointer">
          {productsSpecification?.rating?.text}
        </p>
      </div>
      {/* Product Images */}
      <div className="sm:hidden flex pt-2 gap-2">
        {productsSpecification?.variants?.map((img, index) => (
          <div
            key={index}
            className="rounded-lg cursor-pointer border-solid border-2 border-transparent hover:border-black"
          >
            <img
              src={img?.image}
              alt={`Product view ${index + 1}`}
              className="w-8 h-8 object-cover"
            />
          </div>
        ))}
      </div>
      <div className="gap-1 sm:pt-3 pt-5"></div>
      <p className="text-[#565656] font-normal sm:text-2xl text-lg font-aspekta">
        {productsSpecification.title}
      </p>
      {/* pricing */}
      <div className="flex items-center sm:justify-start justify-between pt-2">
        <div className="flex sm:gap-3 gap-2 items-center">
          <span className="font-bold sm:text-2xl text-base font-eudoxus">
            {productsSpecification?.pricing?.currentPrice}
          </span>
          <span className="line-through text-sm sm:text-base text-black-400 font-aspekta font-[250]">
            {productsSpecification?.pricing?.originalPrice}
          </span>
          <span className="font-400 sm:text-sm text-xs p-0.5 rounded font-aspekta">
            {productsSpecification?.pricing?.discount}
          </span>
        </div>
        <div>
          <p className="sm:hidden flex gap-1 text-sm common-underline font-aspekta text-palette-gray">
            <img
              src={productsSpecification?.rating?.ratingIcon}
              alt="rating-icon"
            />
            {productsSpecification?.rating?.score}
          </p>
        </div>
      </div>
      {/* Product Images */}
      <div className="sm:flex hidden gap-3 pt-10">
        {productsSpecification?.variants?.map((img, index) => (
          <div
            key={index}
            className={`rounded-xl cursor-pointer border border-transparent hover:border-black`}
          >
            <img
              src={img?.image}
              alt={`Product view ${index + 1}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>
      {/* Size Selection */}
      <div className="flex sm:gap-8 gap-6 sm:pt-10 pt-5">
        {productsSpecification?.sizes?.map((size) => (
          <button
            key={size?.value}
            onClick={() => setSelectedSize(size?.value)}
            className={`py-1 sm:text-lg text-sm font-eudoxus ${
              selectedSize === size?.value
                ? "border-b-4 border-red-500 font-bold"
                : "text-gray-500 font-normal border-b-4 border-transparent"
            }`}
          >
            {size?.value}
          </button>
        ))}
      </div>
      {/* Quantity and Actions */}
      <div className="flex items-center justify-between sm:pt-10 pt-5">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="border-none rounded"
          >
            <img src={productsSpecification?.icons?.minus} alt="minus Icon" />
          </button>
          <p className="font-bold font-eudoxus border-b-4 border-red-500 w-6 text-center sm:text-xl text-base pb-2">
            {quantity}
          </p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border-none rounded"
          >
            <img
              src={productsSpecification?.icons?.plus}
              className="w-6 sm:w-8"
              alt="plus Icon"
            />
          </button>
        </div>
        <button className="text-[#565656] flex sm:text-lg text-base items-center gap-1 common-underline font-aspekta hover:opacity-75">
          Bulk Order
          <img
            src={productsSpecification?.icons?.arrowRight}
            className="w-6"
            alt="order-icon"
          />
        </button>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4 pt-8 sm:pt-10">
        <button className="font-eudoxus sm:text-lg text-base font-500 flex-1 py-2 border border-[#565656] text-[#565656] transition-all duration-200 hover:opacity-75 rounded flex justify-center items-center gap-1">
          <img src={starIcon} alt="star-icon" />
          {isMobileScreen
            ? productsSpecification?.actions?.personalise?.mobileTitle
            : productsSpecification?.actions?.personalise?.title}
        </button>
        <button className="font-eudoxus flex-1 py-2 bg-black border-[#565656] text-white transition-all duration-200 hover:opacity-75 rounded flex justify-center items-center gap-1 text-base">
          <img src={cartIcon} alt="cart-icon" />
          <span className="common-underline underline-offset-0">
            {productsSpecification?.actions?.addToCart?.title}
          </span>
        </button>
      </div>
      {/* Check Availability */}
      <div className="flex flex-col-reverse sm:flex-col">
        <div className="space-y-2 sm:pt-10 pt-8">
          <p className="font-medium sm:text-xl text-base font-eudoxus text-palette-black">
            Check availability
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={
                isMobileScreen ? "Enter 6-digit pin code" : "Enter pin code"
              }
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border-0 border-b-2 border-[#333333] bg-transparent font-normal text-sm placeholder:font-aspekta placeholder-shown:px-0 pt-0 md:placeholder-shown:text-[16px] w-4/5 xs:w-full focus:outline-none focus:ring-0 focus:border-[#DD1E24]"
            />
            <button className="text-palette-black flex items-center gap-1 underline decoration-[1px] underline-offset-2 font-eudoxus text-base hover:opacity-60">
              <img src={checkIcon} alt="checkIcon-icon" />
              Check
            </button>
          </div>
        </div>
        {/* Return & Shipping */}
        <div className="space-y-2 sm:pt-10 pt-8">
          <p className="sm:font-medium font-bold sm:text-xl text-base font-eudoxus">
            {productsSpecification?.shipping?.title}
          </p>
          <ul className="sm:pl-7 pl-6 space-y-1 sm:text-base text-sm text-palette-gray font-aspekta">
            {productsSpecification?.shipping?.details?.map((item, index) => (
              <li
                key={index}
                className="marker:text-palette-gray list-disc [&::marker]:!text-[0.7rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
