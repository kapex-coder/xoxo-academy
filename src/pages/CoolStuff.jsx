import React from "react";
import Section from "../component/Section";
import EmblaCarousel from "../component/Carousel/EmblaCarousel";

const OPTIONS = { loop: true };
const SLIDES = [
  {
    src: "https://www.youtube.com/embed/triSuFvgfdw?si=zcfBa6LIlbjjcyYt",
    title: "YouTube video player",
  },
  {
    src: "https://www.youtube.com/embed/Qqi1GSEr0f8?si=_Yx3vpdoEO4yp4o7",
    title: "YouTube video player",
  },
  {
    src: "https://www.youtube.com/embed/ayn38DVuKdY?si=RF3kXdF5O7BYW3Ao",
    title: "YouTube video player",
  },
  {
    src: "https://www.youtube.com/embed/vS_owi6xeS0?si=kD4fwYQ_htEMcgQD",
    title: "YouTube video player",
  },
  {
    src: "https://www.youtube.com/embed/F35fUtsVgzo?si=Y2Ypne1LBCEmcMhD",
    title: "YouTube video player",
  },
];

const CoolStuff = () => {
  return (
    <div id="cool-stuff">
      <h2 className="font-spartan font-bold px-8 py-4 text-4xl md:text-5xl max-w-screen-md mx-auto text-center text-[#6711a4]">
        Some of the <span className="text-customGreen">cool stuff</span> you’ll
        be able to do in our program
      </h2>
      <Section
        className="bg-purple-900"
        containerClassName="h-full py-6">
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
