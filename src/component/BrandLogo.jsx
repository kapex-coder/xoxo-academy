import React from "react";
import brandLogo from "../Assets/brand-logo.png";
import { twMerge } from "tailwind-merge";

const BrandLogo = ({ className }) => {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden w-52 h-28 sm:w-40 sm:h-20 lg:w-60 lg:h-36 xl:w-72",
        className
      )}>
      <img
        src={brandLogo}
        alt="Brand Logo"
        className="absolute top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default BrandLogo;
