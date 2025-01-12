import React from "react";
import celloIcon from "../../assets/svgs/cello.svg";
import facebookIcon from "../../assets/svgs/facebook-icon.svg";
import instagramIcon from "../../assets/svgs/instagram-icon.svg";
import twitterIcon from "../../assets/svgs/twitter-icon.svg";
import linkIcon from "../../assets/svgs/link-icon.svg";

import { footerMenu } from "../../static/newsletter";

const socialIconsArray = [
  {
    src: facebookIcon,
    alt: "facebook-icon",
  },
  {
    src: instagramIcon,
    alt: "instagram-icon",
  },
  {
    src: twitterIcon,
    alt: "twitter-icon",
  },
];

export const Links = () => {
  return (
    <div className="w-full flex flex-col gap-y-3 lg:flex-row lg:gap-x-[15%]">
      {/* Cello social links */}
      <div className="flex flex-row xs:items-center lg:flex-col justify-between">
        <img
          src={celloIcon}
          alt="cello-icon"
          className="xs:w-[50px] xs:h-[25px]"
        />

        <div className="flex flex-row gap-x-4 px-[5px] py-2 lg:p-0">
          {socialIconsArray?.map((item) => {
            return (
              <img
                key={item?.alt}
                src={item?.src}
                alt={item?.alt}
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
            );
          })}
        </div>
      </div>
      {/* footer links */}
      <div className="grid grid-cols-2 gap-x-15 sm:gap-x-20 gap-y-10 place-items-start lg:flex lg:flex-row lg:grow lg:justify-between">
        {footerMenu?.map((menu) => {
          return (
            <div key={menu?.id} className="flex flex-col gap-y-4 font-eudoxus">
              <h3 className="font-bold text-base md:text-xl text-[#DD1E24]">
                {menu?.title}
              </h3>
              <div className="flex flex-col gap-y-2">
                {menu?.items?.map((item) => {
                  return (
                    <div className="flex flex-row gap-x-2 font-eudoxus cursor-pointer">
                      <p
                        key={item?.id}
                        className="font-normal text-xs md:text-base py-1 text-palette-gray text-nowrap"
                      >
                        {item?.text}
                      </p>
                      {item?.new && (
                        <button className="border-[1px] border-[#DD1E24] rounded px-2.5 py-1 text-[#DD1E24] text-xs font-normal">
                          New
                        </button>
                      )}
                      {item?.link && <img src={linkIcon} alt="link-icon" />}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
