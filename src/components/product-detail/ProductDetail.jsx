import React from "react";
import ProductCarousel from "./ProductCarousel";
import ProductSpecs from "./ProductSpecs";

const ProductDetail = () => {
  return (
    <>
      <div className="block sm:hidden">
        <div className="w-full">
          <ProductCarousel />
        </div>
        <div className="px-6 mt-4">
          <ProductSpecs />
        </div>
      </div>
      <section className="hidden sm:flex flex-col lg:flex-row sm:pt-10 pt-4 gap-8">
        <div className="lg:w-1/2 w-full sm:block hidden flex-1">
          <ProductCarousel />
        </div>
        <div className="flex-1">
          <ProductSpecs />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
