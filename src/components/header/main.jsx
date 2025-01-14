import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import celloImg from "../../assets/cello.png";
import { navbarLinks, navIconsArray } from "../../static/navbar";
import menuIcon from "../../assets/svgs/menu-icon.svg";
import closeIcon from "../../assets/svgs/close-menu-icon.svg";
import likeIcon from "../../assets/svgs/like-icon.svg";
import searchIcon from "../../assets/svgs/search-icon.svg";
import cartIcon from "../../assets/svgs/cart-icon.svg";
// import profileIcon from "../../assets/svgs/profile-icon.svg";
import clsx from "clsx";

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
    <nav id="navbar">
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
              <p
                key={link?.id}
                className="text-white cursor-pointer pb-0.5 border-b-[1px] border-transparent hover:border-[#DD1E24] text-base font-300 font-eudoxus transition-all duration-300"
              >
                {link?.title}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute right-8 top-3 flex flex-row gap-x-8 items-start">
          {navIconsArray?.map((items, i) => {
            return (
              <button
                key={`${items?.alt}-${i}`}
                className="hover:border-0 hover:border-b-4 hover:border-[#DD1E24] hover:pb-1"
              >
                <img src={items?.src} alt={items?.alt} className="" />
              </button>
            );
          })}
        </div>
      </div>
      <p className="font-light text-base font-eudoxus bg-[#333333] py-2 text-center text-white">
        20% off on all orders above INR 2599. Use coupon code{" "}
        <span className="text-[#DD1E24] font-medium">CELLOWO</span>
      </p>
    </nav>
  );
};

let lastScrollTop = 0;
const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const hideShowNav = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        navRef?.current?.classList.remove("translate-y-0");
        navRef?.current?.classList.add(
          "-translate-y-full",
          "ease-in-out",
          "duration-500"
        );
      } else if (currentScrollTop < lastScrollTop) {
        navRef?.current?.classList.remove("-translate-y-full");
        navRef?.current?.classList.add(
          "translate-y-0",
          "ease-in-out",
          "duration-500"
        );
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", hideShowNav);
    return () => window.removeEventListener("scroll", hideShowNav);
  }, []);
  return (
    <>
      <nav
        ref={navRef}
        className={clsx(
          "bg-[#141313] flex flex-row gap-x-6 px-6 pt-1 items-center fixed z-20 w-full"
        )}
        id="navbar"
      >
        <button onClick={() => setOpen((prev) => !prev)}>
          <img src={menuIcon} alt="menu-icon" />
        </button>
        <button>
          <img src={likeIcon} alt="like-icon" />
        </button>
        <div className="grow place-items-center">
          <img
            src={celloImg}
            alt="cello-img"
            className="border-0 border-b-4 border-[#DD1E24] pb-2.5"
          />
        </div>
        <button>
          <img src={searchIcon} alt="search-icon" />
        </button>
        <button>
          <img src={cartIcon} alt="cart-icon" />
        </button>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

const Sidebar = ({ open, setOpen }) => {
  //Hooks
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
      <div
        className={clsx(
          open
            ? "fixed top-0 left-0 h-screen w-screen cursor-default z-20 backdrop-brightness-75 drop-shadow-lg overflow-hidden"
            : "hidden"
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={clsx(
          "fixed top-0 left-0 z-40 duration-200 w-0 bg-[#141313] h-screen text-white flex flex-col justify-between",
          open ? "w-[200px] py-4 px-2" : ""
        )}
      >
        <div className="grow overflow-y-auto relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full place-items-end"
          >
            <img src={closeIcon} alt="close-icon" className="h-6 w-6 mb-3" />
          </button>
          <div>
            <ul>
              {navbarLinks?.map((link, i) => {
                return (
                  <li
                    key={`${link?.id}-${i}`}
                    className="cursor-pointer py-2 px-3 hover:bg-slate-400/50 rounded-md font-eudoxus"
                  >
                    {link?.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <div
          className={clsx(
            "flex flex-row gap-x-3 items-center hover:bg-slate-400/50 rounded-md py-2 px-3 cursor-pointer overflow-hidden"
          )}
        >
          <img src={profileIcon} alt="profile-icon" className="h-6 w-6" />
          <span className="text-base font-normal">Profile</span>
        </div> */}
      </div>
    </>
  );
};
