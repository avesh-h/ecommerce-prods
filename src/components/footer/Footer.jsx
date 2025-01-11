import React from "react";
import { Links } from "./Links";
import { Newsletter } from "./NewsLetter.jsx";

const Footer = () => {
  return (
    <section className="w-full bg-[#F6F6F6] sm:mt-20 mt-10 p-8">
      <div className="main-container flex flex-col gap-y-14 items-center">
        <Newsletter />
        <Links />
      </div>
    </section>
  );
};

export default Footer;

// bg-[#F6F6F6]
