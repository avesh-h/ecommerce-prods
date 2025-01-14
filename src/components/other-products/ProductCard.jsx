import React from "react";
import addCartIcon from "../../assets/add-cart-btn.png";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg overflow-hidden cursor-pointer">
      <div className="rounded-lg relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
        <img src={product?.image} alt="Product 2" className="w-full" />
      </div>
      <div className="sm:flex hidden justify-between items-center text-sm mb-2 font-medium text-palette-gray pt-1">
        <span className="font-eudoxus text-xs">{product?.colors}</span>
        <span className="uppercase text-xs font-eudoxus tracking-[0.075rem]">
          Customisable
        </span>
      </div>
      <div className="flex gap-1 w-full pt-1 sm:pt-0">
        {product?.groupProds?.map((gp, i) => {
          return (
            <img
              src={gp?.img}
              key={`${gp}-${i}`}
              className={`border h-10 w-10 border-solid border-transparent rounded-md hover:border-black cursor-pointer ${
                gp?.selected ? "!border-black" : ""
              }`}
              alt="grpImg"
            />
          );
        })}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm flex-1 pt-1">
        <div className="flex flex-col pt-2 sm:pt-4">
          <div>
            <h3 className="sm:text-lg text-base font-aspekta sm:text-palette-black text-palette-gray mb-1 font-normal">
              {product?.title}
            </h3>
            <div className="flex sm:items-center items-end sm:gap-3 gap-1.5">
              <span className="font-eudoxus font-bold sm:text-lg text-base">
                {product?.price}
              </span>
              {product?.originalPrice ? (
                <span className="font-eudoxus line-through text-[10px] sm:text-base text-black-400 font-thin sm:font-normal text-nowrap">
                  {`INR ${product?.originalPrice}`}
                </span>
              ) : null}

              {product?.discount ? (
                <span className="font-aspekta sm:text-xs sm:bg-green-100 bg-white font-normal text-[10px] px-0.5 py-0.2 rounded text-nowrap">
                  {product?.discount}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-4/5 self-end flex justify-between sm:justify-end items-center">
          <a
            className="underline block sm:hidden scroll-smooth"
            href="#product-detail"
          >
            View Details
          </a>
          <button className="flex-shrink-0 w-8 sm:w-10 hover:opacity-75">
            <img src={addCartIcon} alt="add-cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
