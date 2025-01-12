import React from "react";
import Section from "../component/Section";
import flyingAstranaut from "../Assets/flying-astraunaut.png";

const Goals = () => {
  return (
    <Section
      id="goals"
      className="bg-purple-900"
      containerClassName="relative overflow-hidden md:max-w-screen-md h-full text-white md:flex md:items-end md:gap-8 py-40 md:py-20 lg:py-24"
      isSectionFooter>
      <h2 className="text-3xl max-md:mb-4 sm:text-4xl md:text-5xl font-bold max-w-sm">
        The <span className="text-customGreen">goals</span> we are trying to
        achieve as an educating authority
      </h2>
      <p className="text-lg md:text-xl">
        Our goal is to help Nigerians of all ages learn{" "}
        <strong>in-demand skills</strong> like
        <span className="text-customGreen"> VR, XR, and AI</span>, to get{" "}
        <span className="text-customGreen">
          guaranteed internships, job opportunities
        </span>
        , and expert guidance to grow in these careers.
      </p>
      <img
        className="w-9/12 max-w-60 sm:max-w-80 absolute -top-20 max-md:left-1/2 max-md:-translate-x-1/2 right-14 "
        src={flyingAstranaut}
        alt="Flying Astranut"
      />
      <img
        className="block md:hidden max-w-60 sm:max-w-80 w-9/12 absolute -bottom-28 sm:-bottom-32 left-1/2 -translate-x-1/2"
        src={flyingAstranaut}
        alt="Flying Astranut"
      />
    </Section>
  );
};

export default Goals;
