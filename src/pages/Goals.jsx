import React from "react";
import Section from "../component/Section";

const Goals = () => {
  return (
    <Section
      id="goals"
      className="bg-purple-900"
      containerClassName="md:max-w-screen-md h-full text-white md:flex md:items-end md:gap-8 py-16 md:py-20 lg:py-24"
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
    </Section>
  );
};

export default Goals;
