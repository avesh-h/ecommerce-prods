import React from "react";
import emailSvg from "../../assets/svgs/email.svg";

export const Newsletter = () => {
  return (
    <div className="flex flex-col xs:w-full gap-y-[30px] md:gap-y-6 md:w-1/2">
      <div className="flex flex-col gap-y-2 md:gap-y-3 text-center">
        {/* Join our Newsletter */}
        <h3 className="font-bold xs:text-medium md:text-2xl text-[#0E0303]">
          Join our Newsletter
        </h3>
        <p className="text-[#565656] font-light md:text-xl xs:text-sm">
          Be the first to know about our latest updates, exclusive offers, and
          more.
        </p>
      </div>
      {/* Enter Email */}
      <div className="flex flex-col gap-y-2.5 md:gap-y-3">
        <h4 className="font-bold text-base md:text-xl text-[#0E0303]">
          Enter email
        </h4>
        <input
          className="border-0 border-b-2 border-[#333333] bg-transparent font-normal text-sm placeholder-shown:px-0 pt-0 md:placeholder-shown:text-[16px] focus:outline-none focus:ring-0"
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
  );
};
