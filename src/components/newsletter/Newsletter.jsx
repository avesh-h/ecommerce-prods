import React from "react";
import emailSvg from "../../assets/svgs/email.svg";
import celloIcon from "../../assets/svgs/cello.svg";
import facebookIcon from "../../assets/svgs/facebook-icon.svg";
import instagramIcon from "../../assets/svgs/instagram-icon.svg";
import twitterIcon from "../../assets/svgs/twitter-icon.svg";
import linkIcon from "../../assets/svgs/link-icon.svg";

import { footerMenu } from "../../static/newsletter";

const Newsletter = () => {
  return (
    <section className="w-full bg-[#F6F6F6] sm:mt-20 mt-10 p-8">
      <div className="main-container flex flex-col gap-y-14 items-center">
        <div className="flex flex-col xs:w-full gap-y-[30px] md:gap-y-6 md:w-1/2">
          <div className="flex flex-col gap-y-2 md:gap-y-3 text-center">
            {/* Join our Newsletter */}
            <h3 className="font-bold xs:text-medium md:text-2xl text-[#0E0303]">
              Join our Newsletter
            </h3>
            <p className="text-[#565656] font-light md:text-xl xs:text-sm">
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </p>
          </div>
          {/* Enter Email */}
          <div className="flex flex-col gap-y-2.5 md:gap-y-3">
            <h4 className="font-bold text-base md:text-xl text-[#0E0303]">
              Enter email
            </h4>
            <input
              className="border-0 border-b-2 border-[#333333] bg-transparent font-normal text-sm placeholder-shown:px-0 pt-0 md:placeholder-shown:text-[16px] "
              type="email"
              placeholder="Enter your email address"
            />
            <div className="flex flex-row-reverse gap-x-1 mt-3.5">
              <p className="font-medium text-lg underline decoration-1">
                Subscribe
              </p>
              <img src={emailSvg} alt="email-svg" />
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-y-3 lg:flex-row lg:gap-x-[15%]">
          {/* Cello social links */}
          <div className="flex flex-row lg:flex-col justify-between">
            <img
              src={celloIcon}
              alt="cello-icon"
              className="xs:w-[50px] xs:h-[25px]"
            />
            <div className="flex flex-row gap-x-4">
              <img
                src={facebookIcon}
                alt="facebook-icon"
                className="xs:w-6 xs:h-6"
              />
              <img
                src={instagramIcon}
                alt="instagram-icon"
                className="xs:w-6 xs:h-6"
              />
              <img
                src={twitterIcon}
                alt="twitter-icon"
                className="xs:w-6 xs:h-6"
              />
            </div>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-10 place-items-start lg:flex lg:flex-row lg:grow lg:justify-between">
            {footerMenu?.map((menu) => {
              return (
                <div key={menu?.id} className="flex flex-col gap-y-4">
                  <h3 className="font-bold text-base md:text-xl text-[#DD1E24]">
                    {menu?.title}
                  </h3>
                  <div className="flex flex-col gap-y-2">
                    {menu?.items?.map((item) => {
                      return (
                        <div className="flex flex-row gap-x-2">
                          <p
                            key={item?.id}
                            className="font-normal text-xs md:text-base py-1 text-[#565656]"
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
      </div>
    </section>
  );
};

export default Newsletter;

// bg-[#F6F6F6]
