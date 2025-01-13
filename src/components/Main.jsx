import React from "react";
import Products from "./other-products/Products";
import Tab from "./prod-sepcs/Tab";
import Footer from "./footer/Footer";
import { Navbar } from "./header/main";
import ProductDetail from "./product-detail/ProductDetail";

const Main = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-screen-2xl">
        <Navbar />
        <div className="w-10/12 mx-auto">
          <ProductDetail />
          <div className="px-6 lg:px-8">
            <Tab />
          </div>
        </div>
      </div>
      {/* issue below sections */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-6 sm:px-8">
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
