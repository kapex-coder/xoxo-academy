import React from "react";
import Section from "../component/Section";
import flyingAstranaut from "../Assets/flying-astraunaut.png";

const Goals = () => {
  return (
    <Section
      id="purpose"
      className="bg-purple-900"
      containerClassName="relative overflow-hidden md:max-w-screen-md lg:max-w-screen-lg h-full text-white md:flex md:items-end md:gap-8 pt-32 pb-24 md:py-20 lg:py-24"
      isSectionFooter>
      <h2 className="text-4xl max-md:mb-4 md:text-5xl xl:text-6xl font-bold max-w-sm font-spartan">
        The <span className="text-customGreen">goals</span> we are trying to
        achieve as an educating authority
      </h2>
      <p className="text-xl xl:text-2xl">
        Our goal is to help Nigerians of all ages learn{" "}
        <strong>in-demand skills</strong> like
        <span className="text-customGreen"> VR, XR, and AI</span>, to get{" "}
        <span className="text-customGreen">
          guaranteed internships, job opportunities
        </span>
        , and expert guidance to grow in these careers.
      </p>
      <img
        className="w-9/12 max-w-60 sm:max-w-80 lg:max-w-96 absolute -top-20 max-md:left-1/2 max-md:-translate-x-1/2 right-14 xl:right-20 xl:-top-24"
        src={flyingAstranaut}
        alt="Flying Astranut"
      />
    </Section>
  );
};

export default Goals;
