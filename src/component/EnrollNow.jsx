import React from "react";
import { twMerge } from "tailwind-merge";

const EnrollNow = ({ className }) => {
  return (
    <a
      href="#career-program"
      className={twMerge(
        "inline-block px-3 py-1 lg:px-5 lg:py-1.5 text-sm lg:text-lg text-nowrap font-bold font-spartan text-purple-900 rounded-full bg-customGreen hover:bg-green-600",
        className
      )}>
      ENROLL NOW
    </a>
  );
};

export default EnrollNow;
