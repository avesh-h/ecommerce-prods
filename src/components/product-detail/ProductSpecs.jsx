import React, { useState } from "react";
import cartIcon from "../../assets/svgs/cart-2.svg";
import starIcon from "../../assets/svgs/Shopicons_Light_Stars.svg";
import checkIcon from "../../assets/svgs/Shopicons_Light_Checkmark.svg";
import { productsSpecification } from "../../static/product-details";

const ProductSpecs = () => {
  const [selectedSize, setSelectedSize] = useState(
    productsSpecification.sizes?.[0]?.value
  );
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");

  return (
    <div>
      {/* ratings */}
      <div className="sm:flex hidden justify-between text-[#565656]">
        <p className="flex gap-1">
          <img
            src={productsSpecification?.rating?.ratingIcon}
            alt="rating-icon"
          />
          {productsSpecification?.rating?.score}
        </p>
        <p className="uppercase">{productsSpecification?.rating?.text}</p>
      </div>
      <p className="text-[#565656] font-normal sm:text-2xl text-lg">
        {productsSpecification.title}
      </p>
      {/* pricing */}
      <div className="flex items-center sm:gap-3 gap-2 pt-2">
        <span className="font-bold sm:text-lg text-base">
          {productsSpecification?.pricing?.currentPrice}
        </span>
        <span className="line-through text-xs sm:text-base text-black-400 font-thin">
          {productsSpecification?.pricing?.originalPrice}
        </span>
        <span className="font-normal text-xs p-0.5 rounded">
          {productsSpecification?.pricing?.discount}
        </span>
      </div>
      {/* Product Images */}
      <div className="sm:flex hidden gap-1 pt-10">
        {productsSpecification?.variants?.map((img, index) => (
          <div
            key={index}
            className={`rounded cursor-pointer p-2 hover:border hover:border-gray-300`}
          >
            <img
              src={img?.image}
              alt={`Product view ${index + 1}`}
              className="w-16 h-16 object-cover"
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
            className={`py-1 ${
              selectedSize === size?.value
                ? "border-b-4 border-red-500 font-medium"
                : "text-gray-500"
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
          <p className="font-medium border-b-2 border-red-500 w-6 text-center text-xl">
            {quantity}
          </p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border-none rounded"
          >
            <img src={productsSpecification?.icons?.plus} alt="plus Icon" />
          </button>
        </div>
        <button className="text-[#565656] flex items-center gap-1 leading-[1.61rem] underline underline-offset-4 decoration-solid">
          Bulk Order
          <img
            src={productsSpecification?.icons?.arrowRight}
            alt="order-icon"
          />
        </button>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4 pt-8">
        <button className="flex-1 py-2 border border-[#565656] text-[#565656] rounded flex justify-center items-center gap-1">
          <img src={starIcon} alt="star-icon" />
          {productsSpecification?.actions?.personalise?.title}
        </button>
        <button className="flex-1 py-2 bg-black border-[#565656] text-white rounded flex justify-center items-center gap-1">
          <img src={cartIcon} alt="cart-icon" />
          <span className="underline">
            {productsSpecification?.actions?.addToCart?.title}
          </span>
        </button>
      </div>
      {/* Check Availability */}
      <div className="flex flex-col-reverse sm:flex-col">
        <div className="space-y-2 sm:pt-10 pt-8">
          <p className="font-medium sm:text-xl text-base">Check availability</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter pin code"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border-0 border-b-2 border-[#333333] bg-transparent font-normal text-sm placeholder-shown:px-0 pt-0 md:placeholder-shown:text-[16px] w-full"
            />
            <img src={checkIcon} alt="checkIcon-icon" />
            <button className="text-gray-600 underline">Check</button>
          </div>
        </div>
        {/* Return & Shipping */}
        <div className="space-y-2 sm:pt-10 pt-8">
          <p className="font-medium sm:text-xl text-base">
            {productsSpecification?.shipping?.title}
          </p>
          <ul className="space-y-1 text-base text-gray-600">
            {productsSpecification?.shipping?.details?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
