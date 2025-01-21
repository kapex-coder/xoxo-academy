import React from "react";
import Section from "../component/Section";
import wavesImage from "../Assets/mobile-waves.png";
import { Link } from "react-router-dom";
import BrandLogo from "../component/BrandLogo";
import flyingAstranaut from "../Assets/flying-astraunaut.png";
import { twMerge } from "tailwind-merge";

const EnrollCard = ({ className }) => {
  return (
    <div
      className={twMerge(
        "text-white rounded-lg w-full min-w-[290px] md:max-w-[290px] sm:min-w-[300px] sm:max-w-[300px] bg-[radial-gradient(circle_at_0%_0%,#58098f,#8420cb,#373737,#6d6672)] xl:mr-14",
        className
      )}>
      <div className="py-6 md:px-4 xl:py-7">
        <h2 className="uppercase font-spartan text-3xl xl:text-4xl font-bold leading-none mb-2">
          ENROLL today <br />
          <span className="text-customGreen">
            {" "}
            seats are <br className="hidden md:block" /> limited!
          </span>
        </h2>
        <ul className="text-sm xl:text-base list-disc ml-4 font-medium ">
          <li>Choice of Subject in the core syllabus</li>
          <li>Study and Project materials</li>
          <li>Online and Offline Classes based on schedule</li>
          <li>Guaranteed Work Opportunity</li>
        </ul>
        <div className="flex justify-center">
          <Link
            to="/404"
            className="inline-block text-lg sm:text-xl xl:text-2xl xl:pt-2 xl:pb-1 px-8 pt-2 pb-1 rounded-full mt-4 font-bold font-spartan text-purple-900 bg-customGreen hover:bg-green-600">
            ENROLL NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

const Enroll = () => {
  return (
    <>
      <Section
        id="career-program"
        className="relative desktop-waves overflow-hidden lg:min-h-screen"
        containerClassName="md:px-8 pt-6 pb-6 md:pb-10 max-w-[1200px]">
        <BrandLogo
          className="z-50 mx-auto mb-6"
          variant="blue"
        />
        <div className="relative z-50 flex-1 flex max-md:flex-col items-center justify-between gap-3 md:gap-44 min-[920px]:gap-60 lg:gap-80 lg:mt-20">
          <div className="max-w-md">
            <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold font-spartan mb-2 text-[#6711a4] leading-none">
              Be a part of
              <br />
              <span className="inline-block text-black text-shadow-green leading-[0.8]">
                the one <br /> trillion <br /> dollar
              </span>
              <br />
              industry
            </h2>
            <p className="text-[#6711a4] text-base md:text-xl xl:text-2xl text-shadow-blue-sm">
              Learn <strong>VR, XR, AI</strong> and other{" "}
              <strong>essential skills</strong> to guarantee a work oppurtunity
              for you faster than ever with our{" "}
              <span className="text-black text-shadow-green-sm">
                Three month certificate program for VR, XR and AI
              </span>
            </p>
          </div>

          <EnrollCard className="max-md:hidden" />
        </div>
        <img
          className="hidden md:block w-1/2 
        max-w-[25rem] min-[880px]:max-w-[28rem] lg:max-w-[32rem] z-50 rotate-180 absolute left-1/2 -translate-x-[13rem] md:-bottom-36 min-[880px]:-bottom-40 lg:-bottom-44"
          src={flyingAstranaut}
          alt="Flying Astranut"
        />
      </Section>
      <Section
        className="bg-[radial-gradient(circle_at_0%_0%,#58098f,#8420cb,#373737,#6d6672)]"
        containerClassName="max-w-md">
        <EnrollCard className="mx-auto md:hidden bg-none pb-1" />
      </Section>
    </>
  );
};

export default Enroll;
