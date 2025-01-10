import React from "react";
import { products } from "../../static/other-products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="pt-16">
      <h2 className="font-bold text-center mb-6 text-4xl">
        You might also like
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

{
  /* <div className="max-w-screen-xl mx-auto px-4 py-8"> */
}
