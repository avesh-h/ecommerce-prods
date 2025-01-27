import React from "react";
import { products, mobileProducts } from "../../static/other-products";
import ProductCard from "./ProductCard";
import backReturn from "../../assets/svgs/back-return.svg";
import useMobileScreen from "../../hooks/useMobileScreen";

// Just for mobile add static extra product
const Products = () => {
  const isMobileScreen = useMobileScreen();
  const finalProducts = isMobileScreen ? mobileProducts : products;
  return (
    <div className="sm:pt-16 pt-0">
      <div className="py-8 sm:hidden flex items-center w-full justify-center gap-1">
        <button className="text-center flex items-center gap-1 text-base">
          <img src={backReturn} alt="back-return" />
          <span className="text-base font-eudoxus text-palette-black common-underline underline-offset-4 font-500">
            Return to catalog
          </span>
        </button>
      </div>
      <h1 className="text-h1 font-eudoxus text-center sm:text-4xl text-lg">
        You might also like
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 sm:pt-8 pt-3 place-items-center">
        {finalProducts?.map((product) => {
          return (
            // <div key={product.id} className="w-full mx-auto">
            <ProductCard key={product?.id} product={product} />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
