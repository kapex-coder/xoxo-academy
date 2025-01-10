import React from "react";
import BrandLogo from "./BrandLogo";
import Section from "./Section";

const Footer = () => {
  return (
    <Section
      id="footer"
      className="bg-purple-900 pb-2"
      containerClassName="py-4 flex flex-col items-center text-center text-white">
      <BrandLogo className="mb-2 w-40 h-20" />
      <p>Copyright &copy; 2024 XOXO Studios &reg; All rights reserved</p>
    </Section>
  );
};

export default Footer;
