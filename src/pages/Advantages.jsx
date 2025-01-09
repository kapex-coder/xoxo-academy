import React from "react";
import Section from "../component/Section";

// Images
import xoxoEDU from "../Assets/xoxoEDU.png";
import personalisedLearning from "../Assets/personalised-learning.png";
import intractiveSessions from "../Assets/interactive-sessions.png";
import guaranteedSupport from "../Assets/guaranteed-support.png";
import { twMerge } from "tailwind-merge";

const Advantage = ({ image, description, descriptionClassName }) => {
  return (
    <>
      <div className="md:mb-4 w-68 md:w-48 lg:w-60 xl:w-64">
        <img
          src={image.src}
          alt={image.alt || "Advantage Image"}
        />
      </div>
      <p
        className={twMerge(
          "max-md:uppercase max-md:leading-none max-md:text-right text-xl md:text-2xl lg:text-3xl font-bold text-center max-w-[320px]",
          descriptionClassName
        )}>
        {description}
      </p>
    </>
  );
};

const Advantages = () => {
  const advantages = [
    {
      image: {
        src: personalisedLearning,
        alt: "Personalised learning",
      },
      description: "Personalised learning Programs and Syllabus for all Ages",
    },
    {
      image: {
        src: intractiveSessions,
        alt: "Interactive Online Sessions",
      },
      description: "Interactive Online Sessions for concept clarity",
    },
    {
      image: {
        src: guaranteedSupport,
        alt: "Guaranteed Work and Support",
      },
      description: "Guaranteed Work and Support in Career Growth",
    },
  ];

  return (
    <Section
      className="bg-purple-900 min-h-screen font-spartan"
      containerClassName="flex-grow flex flex-col text-white pb-8"
      isSectionFooter>
      <h2 className="text-4xl xl:text-5xl text-white [text-shadow:1px_2px_3px_rgba(255,255,255,0.8)] font-bold my-8 md:mt-8 xl:mt-10 w-full inline-flex max-md:flex-col max-md:items-center items-end justify-center gap-3">
        <span>Get the</span>
        <img
          className="-my-3 md:w-48 md:mb-3"
          src={xoxoEDU}
          alt="xoxoEDU"
        />{" "}
        <span>advantages</span>
      </h2>

      {advantages && (
        <ul className="h-full flex-grow flex max-md:flex-col items-center justify-evenly md:gap-8">
          {advantages.map((advantage, index) => (
            <li
              key={advantage}
              className={twMerge(
                "flex-grow flex md:flex-col items-center gap-4",
                index % 2 !== 0 && "flex-row-reverse"
              )}>
              <Advantage
                image={advantage.image}
                description={advantage.description}
                descriptionClassName={index % 2 !== 0 && "max-md:text-left"}
              />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default Advantages;
