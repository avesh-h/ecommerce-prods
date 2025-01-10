import React from "react";
import Products from "./other-products/Products";
import Tab from "./prod-sepcs/Tab";

const Main = () => {
  return (
    <div className="w-full">
      {/* Navbar here that will take the full width of the page */}
      <div className="container">
        {/* This div will have space of 120px from the left and right */}
        <Tab />
      </div>
      <Products />
    </div>
  );
};

export default Main;

{
  /* <div className="px-4 lg:px-[7.5rem]"> */
}
