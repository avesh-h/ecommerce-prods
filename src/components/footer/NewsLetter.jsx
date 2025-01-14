import React from "react";
import emailSvg from "../../assets/svgs/email.svg";

const newsLetterContent = {
  title: "Join our Newsletter",
  description:
    "Be the first to know about our latest updates, exclusive offers, and more.",
  inputHeading: "Enter email",
  subscribeBtnText: "Subscribe",
};

export const Newsletter = () => {
  return (
    <div className="flex flex-col xs:w-full gap-y-[30px] md:gap-y-6 md:w-1/2">
      <div className="flex flex-col gap-y-2 md:gap-y-3 text-center">
        {/* Join our Newsletter */}
        <h3 className="font-bold xs:text-medium md:text-2xl text-palette-black font-eudoxus">
          {newsLetterContent.title}
        </h3>
        <p className="text-palette-gray font-light md:text-xl xs:text-sm font-aspekta">
          {newsLetterContent.description}
        </p>
      </div>
      {/* Enter Email */}
      <div className="flex flex-col gap-y-2.5 md:gap-y-3">
        <h4 className="font-bold text-base md:text-xl text-palette-black font-eudoxus">
          {newsLetterContent.inputHeading}
        </h4>
        <input
          className="border-0 border-b-2 border-[#333333] bg-transparent font-normal text-sm placeholder:font-aspekta placeholder-shown:px-0 pt-0 md:placeholder-shown:text-[16px] focus:outline-none focus:ring-0 focus:border-[#DD1E24]"
          type="email"
          placeholder="Enter your email address"
        />
        <div className="flex flex-row-reverse gap-x-1 sm:mt-0 mt-3">
          <p className="font-500 text-base underline decoration-1 underline-offset-4 font-eudoxus cursor-pointer hover:opacity-75">
            {newsLetterContent?.subscribeBtnText}
          </p>
          <img src={emailSvg} alt="email-svg" />
        </div>
      </div>
    </div>
  );
};
