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
      <div className="flex flex-row justify-center">
        <div className="sm:container w-full flex flex-col gap-x-4 sm:w-10/12">
          <ProductDetail />
          <div className="sm:px-0 px-6">
            <Tab />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="sm:px-8 px-6">
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
