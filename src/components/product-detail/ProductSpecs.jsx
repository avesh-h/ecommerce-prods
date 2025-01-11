import React, { useState } from "react";
import productImg from "../../assets/main-prod.png";
import plusIcon from "../../assets/svgs/Shopicons_Light_Plus.svg";
import minusIcon from "../../assets/svgs/Shopicons_Light_Minus.svg";
import arrorRight from "../../assets/svgs/Shopicons_Light_ArrowRight.svg";
import cartIcon from "../../assets/svgs/cart-2.svg";
import starIcon from "../../assets/svgs/Shopicons_Light_Stars.svg";

const ProductSpecs = () => {
  const images = [productImg, productImg, productImg, productImg];

  const [selectedSize, setSelectedSize] = useState("450ml");
  const [quantity, setQuantity] = useState(1);
  const sizes = ["450ml", "750ml"];
  const [pincode, setPincode] = useState("");

  return (
    <div>
      <p className="text-gray-700 font-normal text-2xl">
        Duro Café Flask, Steel Insulated Coffee Mug, 450ml
      </p>
      <div className="flex items-center gap-3 pt-2">
        <span className="font-bold sm:text-lg text-base">$902</span>
        <span className="line-through text-xs sm:text-base text-black-400 font-thin">
          {`INR 1,999`}
        </span>
        <span className="font-normal text-xs p-0.5 rounded">50% off</span>
      </div>
      {/* Product Images */}
      <div className="flex gap-1 pt-10">
        {images.map((img, index) => (
          <div
            key={index}
            className={`rounded cursor-pointer p-2 hover:border hover:border-gray-300   `}
          >
            <img
              src={img}
              alt={`Product view ${index + 1}`}
              className="w-16 h-16 object-cover"
            />
          </div>
        ))}
      </div>
      {/* Size Selection */}
      <div className="flex gap-4 sm:pt-10 pt-5">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`py-1 px-4 ${
              selectedSize === size
                ? "border-b-4 border-red-500 font-medium"
                : "text-gray-500"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      {/* Quantity and Actions */}
      <div className="flex items-center justify-between sm:pt-10 pt-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 border-none rounded"
          >
            <img src={minusIcon} alt="minus Icon" />
          </button>
          <p className="font-medium border-b-2 border-red-500 w-6 text-center">
            {quantity}
          </p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 border-none rounded"
          >
            <img src={plusIcon} alt="plus Icon" />
          </button>
        </div>
        <button className="text-gray-600 flex items-center gap-1 underline">
          Bulk Order
          <img src={arrorRight} alt="order-icon" />
        </button>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4 pt-8">
        <button className="flex-1 py-2 border border-[#565656] text-[#565656] rounded flex justify-center items-center gap-1">
          <img src={starIcon} alt="star-icon" />
          Personalise
        </button>
        <button className="flex-1 py-2 bg-black border-[#565656] text-white rounded flex justify-center items-center gap-1">
          <img src={cartIcon} alt="cart-icon" />
          <span className="underline">Add to Cart</span>
        </button>
      </div>

      <div className="flex flex-col-reverse sm:flex-col">
        {/* Check Availability */}
        <div className="space-y-2 sm:pt-10 pt-8">
          <p className="font-medium">Check availability</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter pin code"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border-0 border-b-2 border-[#333333] bg-transparent font-normal text-sm placeholder-shown:px-0 pt-0 md:placeholder-shown:text-[16px] w-full"
            />
            <button className="text-gray-600 underline">Check</button>
          </div>
        </div>
        {/* Return & Shipping */}
        <div className="space-y-2 sm:pt-10 pt-8">
          <p className="font-medium">Return & Shipping</p>
          <ul className="space-y-1 text-base text-gray-600">
            <li>
              • Personalised products will take 7-9 days more for delivery
            </li>
            <li>• Personalised products are not returnable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
