import React from "react";
import { products } from "../../static/other-products";
import ProductCard from "./ProductCard";
import backReturn from "../../assets/svgs/back-return.svg";
import useMobileScreen from "../../hooks/useMobileScreen";
import productImg from "../../assets/prod-img.png";
import prodTwo from "../../assets/grp-prod-3.png";
import prodThree from "../../assets/grp-prod-2.png";
import prodFour from "../../assets/grp-prod-1.png";

// Just for mobile add static extra product
const extraProd = {
  id: 4,
  image: productImg,
  title: "Duro Imperial Vacusteel Flask With Mugs Gift Set, 5 Pieces",
  colors: "4 Colours",
  price: "₹5,795",
  originalPrice: "₹7,999",
  discount: "50% off",
  customizable: true,
  groupProds: [prodFour, prodTwo, prodThree, prodFour],
};

const Products = () => {
  const isMobileScreen = useMobileScreen();
  const finalProducts = isMobileScreen ? [...products, extraProd] : products;
  return (
    <div className="sm:pt-16 pt-0">
      <div className="py-8 sm:hidden flex items-center w-full justify-center gap-1">
        <button className="text-center flex items-center gap-1 text-base">
          <img src={backReturn} alt="back-return" />
          <span className="text-base font-eudoxus text-palette-black underline underline-offset-4 font-500">
            Return to catalog
          </span>
        </button>
      </div>
      <h1 className="text-h1 font-eudoxus text-center sm:text-4xl text-lg">
        You might also like
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 sm:pt-8 pt-3">
        {finalProducts?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
