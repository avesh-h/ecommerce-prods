import React from "react";
import { products } from "../../static/other-products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="pt-16">
      <h2 className="font-bold text-center mb-6 sm:text-4xl text-lg">
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
