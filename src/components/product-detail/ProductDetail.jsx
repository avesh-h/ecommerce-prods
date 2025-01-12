import React from "react";
import ProductCarousel from "./ProductCarousel";
// import prodImage from "../../assets/main-prod-2.png";
import ProductSpecs from "./ProductSpecs";

const ProductDetail = () => {
  return (
    <>
      <div className="sm:w-1/2 w-full block sm:hidden">
        <ProductCarousel />
      </div>
      <section className="flex flex-col sm:flex-row pt-10 gap-8">
        <div className="sm:w-1/2 w-full sm:block hidden">
          <ProductCarousel />
        </div>
        <div>
          <ProductSpecs />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
