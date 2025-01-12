import React from "react";
import { products } from "../../static/other-products";
import ProductCard from "./ProductCard";
import backReturn from "../../assets/svgs/back-return.svg";

const Products = () => {
  return (
    <div className="sm:pt-16 pt-0">
      <div className="py-8 sm:hidden flex items-center w-full justify-center gap-1">
        <button className="text-center common-underline flex items-center gap-1 text-base">
          <img src={backReturn} alt="back-return" />
          Return to catalog
        </button>
      </div>
      <h2 className="font-bold text-center sm:text-4xl text-lg">
        You might also like
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 sm:pt-8 pt-3">
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
