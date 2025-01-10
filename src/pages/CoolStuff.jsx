import React from "react";
import Section from "../component/Section";
import EmblaCarousel from "../component/Carousel/EmblaCarousel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CoolStuff = () => {
  return (
    <div id="cool-stuff">
      <h2 className="font-spartan font-bold px-8 py-4 text-3xl md:text-5xl max-w-screen-md mx-auto text-center text-[#6711a4]">
        Some of the <span className="text-customGreen">cool stuff</span> you’ll
        be able to do in our program
      </h2>
      <Section
        className="bg-purple-900"
        containerClassName="h-full">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </Section>
      <p className="px-8 py-6 text-center text-[#6711a4] max-w-screen-sm mx-auto">
        We do not just teach our students, we get them ready to be Creators.
        Ready to be active and solve problems with a strong emphasis on Career
        building and Strong Fundamental Knowledge.
      </p>
    </div>
  );
};

export default CoolStuff;
