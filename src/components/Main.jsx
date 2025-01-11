import React from "react";
import Products from "./other-products/Products";
import Tab from "./prod-sepcs/Tab";
import Newsletter from "./newsletter/Newsletter";

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
      <div className="p-8">
        <Products />
      </div>
      <Newsletter />
    </div>
  );
};

export default Main;
