import React from "react";
import addCartIcon from "../../assets/add-cart-btn.png";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg shadow-sm overflow-hidden">
      <img src={product?.image} alt="Product 2" className="w-full" />
      <div className="sm:flex hidden justify-between items-center text-sm mb-2 font-medium">
        <span className="text-gray-500">{product?.colors}</span>
        <span className="uppercase text-xs text-gray-400">Customisable</span>
      </div>
      <div className="flex gap-1 w-full">
        {product?.groupProds?.map((gp, i) => {
          return (
            <img src={gp} key={`${gp}-${i}`} className="pt-1" alt="grpImg" />
          );
        })}
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 text-sm flex-1 pt-1">
        <div className="flex flex-col">
          <div>
            <h3 className="sm:text-lg text-base sm:text-[#0E0303] text-[#565656] mb-1 font-normal">
              {product?.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="font-bold sm:text-lg text-base">
                {product?.price}
              </span>
              <span className="line-through text-xs sm:text-base text-black-400 font-thin sm:font-normal">
                {`INR ${product?.originalPrice}`}
              </span>
              <span className="sm:bg-green-100 bg-white font-normal text-xs p-0.5 rounded">
                {product?.discount}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/5 self-end flex justify-between sm:justify-end items-center">
          <p className="underline block sm:hidden">View Details</p>
          <button className="flex-shrink-0 w-8 sm:w-10">
            <img src={addCartIcon} alt="add-cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
