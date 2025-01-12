import variantOne from "../assets/b-1.png";
import variantTwo from "../assets/b-2.png";
import variantFour from "../assets/b-3.png";
import variantThree from "../assets/b-4.png";
import cartIcon from "../assets/svgs/cart-2.svg";
import arrorRight from "../assets/svgs/Shopicons_Light_ArrowRight.svg";
import checkIcon from "../assets/svgs/Shopicons_Light_Checkmark.svg";
import minusIcon from "../assets/svgs/Shopicons_Light_Minus.svg";
import plusIcon from "../assets/svgs/Shopicons_Light_Plus.svg";
import starIcon from "../assets/svgs/Shopicons_Light_Stars.svg";
import ratingIcon from "../assets/svgs/Shopicons_Filled_Star.svg";

export const productsSpecification = {
  title: "Duro Café Flask, Steel Insulated Coffee Mug, 450ml",
  rating: {
    ratingIcon: ratingIcon,
    score: "4.8 (8 reviews)",
    text: "Customisable",
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
    },
    {
      id: 2,
      color: "Green",
      image: variantTwo,
    },
    {
      id: 3,
      color: "Blue",
      image: variantThree,
      isDefault: true,
    },
    {
      id: 4,
      color: "Black",
      image: variantFour,
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
    title: "Bulk Order",
  },
  actions: {
    personalise: {
      title: "Personalise",
      mobileTitle: "Customize",
      icon: starIcon,
    },
    addToCart: {
      title: "Add to Cart",
      icon: cartIcon,
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
