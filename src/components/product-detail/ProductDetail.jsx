import React from "react";
import { ProductCarousel } from "./ProductCarousel";
import prodImage from "../../assets/main-prod-2.png";
import ProductSpecs from "./ProductSpecs";

const ProductDetail = () => {
  return (
    <section className="flex flex-col sm:flex-row pt-10 gap-8">
      {/* <ProductCarousel /> */}
      <div>
        <img src={prodImage} alt="product" className="w-full" />
      </div>
      <div>
        <ProductSpecs />
      </div>
    </section>
  );
};

export default ProductDetail;
