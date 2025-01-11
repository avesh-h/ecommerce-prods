import React from "react";
import Products from "./other-products/Products";
import Tab from "./prod-sepcs/Tab";
import Footer from "./footer/Footer";

const Main = () => {
  return (
    <div className="w-full">
      {/* Navbar here that will take the full width of the page */}
      <div className="flex flex-row justify-center">
        <div className="container flex flex-col gap-x-4 w-10/12">
          {/* This div will have space of 120px from the left and right */}
          <Tab />
        </div>
      </div>
      <div className="sm:px-8 px-6">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
