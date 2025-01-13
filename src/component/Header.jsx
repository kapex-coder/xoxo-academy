import React, { useEffect, useRef, useState } from "react";
import BrandLogo from "./BrandLogo";
import { twMerge } from "tailwind-merge";
import EnrollNow from "./EnrollNow";
import { Link } from "react-router-dom";

const navLinks = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#purpose",
    label: "Purpose",
  },
  {
    href: "mailto:info.xoxoacademy@gmail.com",
    label: "Contact Us",
  },
  {
    href: "/404",
    label: "Privacy",
  },
];

const CustomNavLink = ({
  href,
  className,
  closeDrawer,
  children,
  ...props
}) => {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={twMerge(
          "uppercase text-md md:text-lg lg:text-xl text-nowrap font-semibold hover:text-customGreen text-shadow !font-spartan",
          className
        )}
        onClick={closeDrawer}
        {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={twMerge(
        "uppercase text-md md:text-lg lg:text-xl text-nowrap font-semibold hover:text-customGreen text-shadow !font-spartan",
        className
      )}
      onClick={closeDrawer}
      {...props}>
      {children}
    </Link>
  );
};

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDrawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setIsDrawerOpen(false);
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    };

    document.addEventListener("mousedown", handleOutsideClick);
    disableScroll();

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

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
        ref={drawerRef}
        className={`fixed top-0 left-0 bottom-0 h-full bg-purple-800 bg-opacity-90 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 z-50`}>
        <button
          className="absolute text-customGreen font-bold top-4 right-4 focus:outline-none"
          onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 16 16">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
            />
          </svg>
        </button>
        <div className="flex flex-col h-full space-y-6 mt-14 ml-12 sm:space-y-8 md:space-y-10">
          {navLinks.map((navLink) => {
            return (
              <CustomNavLink
                key={navLink.label}
                href={navLink.href}
                className="text-2xl"
                closeDrawer={closeDrawer}>
                {navLink.label}
              </CustomNavLink>
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
          <li
            key={navLink.label}
            className="uppercase">
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
            <li key={navLink.label}>
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
