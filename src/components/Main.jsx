import React from "react";
import Products from "./other-products/Products";
import Tab from "./prod-sepcs/Tab";
import Footer from "./footer/Footer";
import { Navbar } from "./header/main";
import ProductDetail from "./product-detail/ProductDetail";

const Main = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto">
          <ProductDetail />
          <div className="px-6 lg:px-8">
            <Tab />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="px-6 sm:px-8">
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
