import React from "react";
import Products from "./other-products/Products";
import Tab from "./prod-sepcs/Tab";
import Footer from "./footer/Footer";
import { Navbar } from "./header/main";
import ProductDetail from "./product-detail/ProductDetail";

const Main = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <Navbar />
        <div className="max-w-[1250px] mx-auto" id="product-detail">
          <ProductDetail />
          <div className="px-6 lg:px-8">
            <Tab />
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="px-6 max-w-screen-2xl sm:px-8 mx-auto">
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;

// const Container = () => {
//   <div className="max-w-[1440px] mx-auto px-[34px]">
//     {/* navbar */}
//     <div className="max-w-[1253] mx-auto px-[25px]">
//       {/* product detail */}
//       {/* tab */}
//     </div>
//     {/* products */}
//     {/* footer */}
//   </div>;
// };

// tablet = 25px
