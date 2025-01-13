import React from "react";
import BrandLogo from "./BrandLogo";
import Section from "./Section";

const Footer = () => {
  return (
    <Section
      id="footer"
      className="bg-purple-900 pb-2"
      containerClassName="py-4 flex flex-col items-center text-center text-white">
      <BrandLogo className="mb-2 w-40 h-20 sm:w-40 sm:h-20 lg:w-60 lg:h-28 xl:w-56 " />
      <small className="xl:text-md">Copyright &copy; 2024 XOXO Studios &reg; All rights reserved</small>
    </Section>
  );
};

export default Footer;
