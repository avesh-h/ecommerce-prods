import React, { useLayoutEffect, useState } from "react";
import celloImg from "../../assets/cello.png";
import { navbarLinks, navIconsArray } from "../../static/navbar";
import menuIcon from "../../assets/svgs/menu-icon.svg";
import likeIcon from "../../assets/svgs/like-icon.svg";
import searchIcon from "../../assets/svgs/search-icon.svg";
import cartIcon from "../../assets/svgs/cart-icon.svg";

export const Navbar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth < 600 ? true : false
  );

  useLayoutEffect(() => {
    const execute = () => {
      setIsMobileScreen(window.innerWidth < 600 ? true : false);
    };
    window.addEventListener("resize", execute);
    return () => window?.removeEventListener("resize", execute);
  }, []);

  return isMobileScreen ? (
    <NavbarMobile />
  ) : (
    <nav>
      <div className="bg-[#141313] py-3 relative">
        <div className="w-5/7 flex flex-col gap-y-[18px]">
          <div className="w-fit self-center">
            <img
              src={celloImg}
              alt="cello-img"
              className="border-0 border-b-4 border-[#DD1E24] pb-2.5"
            />
          </div>
          <div className="flex flex-row gap-x-9 justify-center flex-wrap">
            {navbarLinks?.map((link) => (
              <a
                href=""
                key={link?.id}
                className="text-white font-base text-light"
              >
                {link?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute right-8 top-3 flex flex-row gap-x-8 items-start">
          {navIconsArray?.map((items) => {
            return (
              <button className="hover:border-0 hover:border-b-4 hover:border-[#DD1E24] hover:pb-1">
                <img src={items?.src} alt={items?.alt} className="" />
              </button>
            );
          })}
        </div>
      </div>
      <p className="font-light text-base bg-[#333333] py-2 text-center text-white">
        20% off on all orders above INR 2599. Use coupon code{" "}
        <span className="text-[#DD1E24] font-medium">CELLOWO</span>
      </p>
    </nav>
  );
};

const NavbarMobile = () => {
  return (
    <nav className="bg-[#141313] flex flex-row gap-x-6 px-6 py-1 items-center">
      <img src={menuIcon} alt="menu-icon" />
      <img src={likeIcon} alt="like-icon" />
      <div className="grow mx-auto">
        <img
          src={celloImg}
          alt="cello-img"
          className="border-0 border-b-4 border-[#DD1E24] pb-2.5"
        />
      </div>
      <img src={searchIcon} alt="search-icon" />
      <img src={cartIcon} alt="cart-icon" />
    </nav>
  );
};
