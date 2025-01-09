import React from "react";
import BrandLogo from "./BrandLogo";
import Section from "./Section";

const Footer = () => {
  return (
    <Section
      className="bg-purple-900 pb-2"
      containerClassName="flex flex-col items-center text-center text-white">
      <BrandLogo className="mb-2" />
      <p>Copyright &copy; 2024 XOXO Studios &reg; All rights reserved</p>
    </Section>
  );
};

export default Footer;
