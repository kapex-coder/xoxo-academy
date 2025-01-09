import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import { twMerge } from "tailwind-merge";
import EnrollNow from "./EnrollNow";

const navLinks = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Purpose",
  },
  {
    href: "#",
    label: "Contact Us",
  },
  {
    href: "#",
    label: "Privacy",
  },
];

const CustomNavLink = ({ href, className, children, ...props }) => {
  return (
    <a
      href={href}
      className={twMerge(
        "text-sm md:text-lg lg:text-xl text-nowrap font-medium hover:text-customGreen [text-shadow:1px_1px_3px_rgba(255,255,255,0.8)]",
        className
      )}
      {...props}>
      {children}
    </a>
  );
};

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="max-sm:block hidden">
      <button
        className="absolute text-7xl left-0 top-1/2 -translate-y-1/2 sm:block md:block lg:hidden text-customGreen focus:outline-none"
        onClick={openDrawer}>
        &#8942;
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-purple-800 bg-opacity-90 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 z-50`}>
        {/* Close Button */}
        <button
          className="absolute text-3xl text-customGreen top-4 right-4 focus:outline-none"
          onClick={closeDrawer}>
          ✕
        </button>
        <div className="flex flex-col items-center h-full space-y-6 mt-14 sm:space-y-8 md:space-y-10">
          {navLinks.map((navItem) => {
            return (
              <a
                key={navItem.label}
                href={navItem.href}
                className="text-lg text-white sm:text-xl md:text-2xl hover:text-customGreen"
                onClick={closeDrawer}>
                {navItem.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="relative max-sm:mt-2 flex items-center justify-between sm:gap-4 lg:gap-6">
      <ul className="hidden sm:flex sm:items-center sm:gap-4 lg:gap-14 flex-1 -mt-3">
        {navLinks.slice(0, 3).map((navLink) => (
          <li className="uppercase">
            <CustomNavLink href={navLink.href}>{navLink.label}</CustomNavLink>
          </li>
        ))}
      </ul>

      <div className="flex-1 flex justify-center">
        <a href="#">
          <BrandLogo />
        </a>
      </div>

      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end sm:gap-4 lg:gap-20 -mt-3">
        <ul className="sm:flex sm:items-center sm:justify-end sm:gap-4 lg:gap-14 flex-1">
          {navLinks.slice(3).map((navLink) => (
            <li className="uppercase">
              <CustomNavLink href={navLink.href}>{navLink.label}</CustomNavLink>
            </li>
          ))}
        </ul>
        <EnrollNow />
      </div>

      <Drawer />
    </nav>
  );
};

export default Header;
