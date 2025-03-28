import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const EnrollNow = ({ className }) => {
  return (
    <Link
      to="/enroll"
      className={twMerge(
        "inline-block px-3 pt-1.5 lg:px-5 lg:pt-1.5 lg:pb-0.5 text-sm lg:text-lg text-nowrap font-bold font-spartan text-purple-900 rounded-full bg-customGreen hover:bg-green-600",
        className
      )}>
      ENROLL NOW
    </Link>
  );
};

export default EnrollNow;
