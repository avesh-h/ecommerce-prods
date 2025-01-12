import productImage from "../assets/main-prod.png";
import productImage2 from "../assets/prod-img.png";
import variantOne from "../assets/b-1.png";
import variantTwo from "../assets/b-2.png";
import variantThree from "../assets/b-4.png";
import variantFour from "../assets/b-3.png";
import plusIcon from "../assets/svgs/Shopicons_Light_Plus.svg";
import minusIcon from "../assets/svgs/Shopicons_Light_Minus.svg";
import arrorRight from "../assets/svgs/Shopicons_Light_ArrowRight.svg";
import cartIcon from "../assets/svgs/cart-2.svg";
import starIcon from "../assets/svgs/Shopicons_Light_Stars.svg";
import checkIcon from "../assets/svgs/Shopicons_Light_Checkmark.svg";

export const productDetails = {
  imageSection: [
    {
      id: 1,
      image: productImage,
    },
    {
      id: 2,
      image: productImage2,
    },
    {
      id: 3,
      image: productImage,
    },
  ],
};

export const productsSpecification = {
  id: "duro-cafe-flask-450ml",
  title: "Duro Café Flask, Steel Insulated Coffee Mug, 450ml",
  rating: {
    score: 4.8,
    reviewCount: 8,
    reviewLink: "#",
  },
  customizable: true,
  pricing: {
    currentPrice: "₹902",
    originalPrice: "INR 1999",
    discount: "50% off",
  },
  variants: [
    {
      id: 1,
      color: "Grey",
      image: variantOne,
      available: true,
    },
    {
      id: 2,
      color: "Green",
      image: variantTwo,
      available: true,
    },
    {
      id: 3,
      color: "Blue",
      image: variantThree,
      available: true,
      isDefault: true,
    },
    {
      id: 4,
      color: "Black",
      image: variantFour,
      available: true,
    },
  ],
  sizes: [
    {
      value: "450ml",
      isDefault: true,
    },
    {
      value: "750ml",
      isDefault: false,
    },
  ],
  bulkOrder: {
    available: true,
    link: "#",
    dimensions: "88 Hug × 26 Hug",
  },
  actions: {
    personalise: {
      title: "Personalise",
      mobileTitle: "Customize",
      icon: starIcon,
      available: true,
    },
    addToCart: {
      title: "Add to Cart",
      icon: cartIcon,
      available: true,
    },
  },
  shipping: {
    title: "Return & Shipping",
    pincodeCheckAvailable: true,
    details: [
      "• Personalised products will take 7-9 days more for delivery",
      "• Personalised products are not returnable",
    ],
  },
  icons: {
    arrowRight: arrorRight,
    plus: plusIcon,
    minus: minusIcon,
    check: checkIcon,
  },
};
