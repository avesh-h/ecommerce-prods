import productImg from "../assets/prod-img.png";
import prodTwo from "../assets/grp-prod-3.png";
import prodThree from "../assets/grp-prod-2.png";
import prodFour from "../assets/grp-prod-1.png";
import cupOne from "../assets/cup-1.png";
import cupTwo from "../assets/cup-2.png";
import cupThree from "../assets/cup-3.png";
import cupFour from "../assets/cup-4.png";
import mobProdOne from "../assets/m-prod-1(2).png";
import mobProdTwo from "../assets/m-prod-1(3).png";
import mobProdThree from "../assets/m-prod-2(1).png";

export const products = [
  {
    id: 1,
    image: productImg,
    title: "Duro Imperial Vacusteel Flask With Mugs Gift Set, 5 Pieces",
    colors: "4 Colours",
    price: "₹5,795",
    originalPrice: "₹1,999",
    discount: "50% off",
    customizable: true,
    groupProds: [prodFour, prodTwo, prodThree, prodFour]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 0 ? true : false,
    })),
  },
  {
    id: 2,
    image: productImg,
    title: "Duro Imperial Vacusteel Flask With Mugs Gift Set, 5 Pieces",
    colors: "4 Colours",
    price: "₹5,795",
    originalPrice: "₹1,999",
    discount: "50% off",
    customizable: true,
    groupProds: [prodFour, prodTwo, prodThree, prodFour]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 0 ? true : false,
    })),
  },
  {
    id: 3,
    image: productImg,
    title: "Duro Imperial Vacusteel Flask With Mugs Gift Set, 5 Pieces",
    colors: "4 Colours",
    price: "₹5,795",
    originalPrice: "₹1,999",
    discount: "50% off",
    customizable: true,
    groupProds: [prodFour, prodTwo, prodThree, prodFour]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 0 ? true : false,
    })),
  },
  // {
  //   id: 4,
  //   image: productImg,
  //   title: "Duro Imperial Vacusteel Flask With Mugs Gift Set, 5 Pieces",
  //   colors: "4 Colours",
  //   price: "₹5,795",
  //   originalPrice: "₹7,999",
  //   discount: "50% off",
  //   customizable: true,
  //   groupProds: [prodFour, prodTwo, prodThree, prodFour],
  // },
];

export const mobileProducts = [
  {
    id: 1,
    image: cupThree,
    title: "Hampshire 6 Pieces Ceramic Mug",
    colors: "4 Colours",
    price: "₹902",
    originalPrice: "₹1,999",
    discount: "50% off",
    customizable: true,
    groupProds: [prodFour, mobProdOne, mobProdTwo, prodFour]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 0 ? true : false,
    })),
  },
  {
    id: 2,
    image: cupOne,
    title: "Retro 6 Pieces Ceramic Mug",
    colors: "4 Colours",
    price: "₹9202",
    customizable: true,
    groupProds: [mobProdThree, cupOne]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 1 ? true : false,
    })),
  },
  {
    id: 3,
    image: cupFour,
    title: "Retro 6 Pieces Ceramic Mug",
    colors: "4 Colours",
    price: "₹1099",
    customizable: true,
    groupProds: [mobProdThree, cupOne]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 1 ? true : false,
    })),
  },
  {
    id: 4,
    image: cupTwo,
    title: "Military 6 Pieces Ceramic Mug",
    colors: "4 Colours",
    price: "₹1499",
    customizable: true,
    groupProds: [mobProdThree, cupTwo]?.map((gp, i) => ({
      id: i + 1,
      img: gp,
      selected: i === 1 ? true : false,
    })),
  },
];
