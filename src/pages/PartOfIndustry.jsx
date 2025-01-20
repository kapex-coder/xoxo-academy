import React from "react";
import Section from "../component/Section";
import wavesImage from "../Assets/waves.png";

const PartOfIndustry = () => {
  return (
    <Section
      id="purpose"
      className="bg-purple-900 relative overflow-hidden"
      containerClassName=" h-full text-white pt-32 pb-24 md:py-20 lg:py-24"
      isSectionFooter>
      <div className="relative z-10 max-w-[900px] mx-auto md:flex md:gap-8 lg:gap-28">
        <h2 className="text-4xl max-md:mb-4 md:text-5xl font-bold font-spartan w-1/2">
          BE A PART OF <br />
          <span className="text-customGreen">
            {" "}
            THE ONE <br />
            TRILLION <br /> DOLLAR
          </span>{" "}
          <br />
          INDUSTRY
        </h2>
        <p className="text-xl xl:text-2xl w-1/2">
          <strong className="text-customGreen"> VR, XR, and AI</strong>{" "}
          contribute to a <strong>One Trillion dollar industry</strong> as of
          2024 and is growing every second. As a part of our syllabus we also
          teach{" "}
          <strong className="text-customGreen">
            Robotics, Electronics and other essential courses
          </strong>{" "}
          for you to <strong>grow</strong> your career{" "}
          <strong>faster and easier than ever</strong>.
        </p>
      </div>
      <img
        className="hidden rotate-180 md:block z-0 absolute bottom-0 left-0 right-0"
        src={wavesImage}
        alt="Waves"
      />
    </Section>
  );
};

export default PartOfIndustry;
