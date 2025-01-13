import React from "react";
import ProductCarousel from "./ProductCarousel";
import ProductSpecs from "./ProductSpecs";

const ProductDetail = () => {
  return (
    <>
      <div className="block md:hidden sm:mt-12">
        <div className="w-full">
          <ProductCarousel />
        </div>
        <div className="px-6 mt-4">
          <ProductSpecs />
        </div>
      </div>
      <section className="hidden w-full md:flex flex-row gap-x-8 md:mt-12">
        <ProductCarousel />
        <ProductSpecs />
      </section>
    </>
  );
};

export default ProductDetail;
