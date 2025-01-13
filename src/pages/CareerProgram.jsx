import React from "react";
import Section from "../component/Section";
import wavesImage from "../Assets/waves.png";
import wavesMobileImage from "../Assets/mobile-waves.png";
import { Link } from "react-router-dom";

const CertificateProgramCard = () => {
  return (
    <div className="bg-black text-white rounded-lg w-full min-w-[290px] max-w-[290px] sm:min-w-[310px] sm:max-w-[310px] md:min-w-[330px] md:max-w-[330px] xl:min-w-[360px] xl:max-w-[360px] bg-[radial-gradient(circle_at_0%_0%,#58098f,#8420cb,#373737,#6d6672)] xl:mr-14">
      <div className="p-6 xl:p-7">
        <h2 className="font-spartan text-3xl xl:text-4xl font-bold leading-none mb-2">
          <span className="text-customGreen">3 MONTH</span> <br /> CERTIFICATE{" "}
          <br /> PROGRAM
        </h2>
        <ul className="text-sm xl:text-base list-disc ml-4 font-medium ">
          <li>Choice of Subject in the core syllabus</li>
          <li>Study and Project materials</li>
          <li>Online and Offline Classes based on schedule</li>
          <li>Guaranteed Work Opportunity</li>
        </ul>
      </div>
      <hr className="border-2 border-white" />
      <div className="p-6 xl:p-7">
        <p className="text-sm xl:text-base">30% off for Limited Time Only</p>
        <p className="text-[#ff3131] text-xl xl:text-2xl line-through">₦13799/month</p>
        <p className="text-3xl xl:text-4xl font-bold">
          ₦10799/month
        </p>
        <Link to="/404" className="inline-block text-md sm:text-xl xl:text-2xl xl:pt-2 xl:pb-1 px-2 lg:px-3 pt-1 pb-0.5 rounded mt-2 font-bold font-spartan text-purple-900 bg-customGreen hover:bg-green-600">
          CHOOSE YOUR SYLLABUS
        </Link>
      </div>
    </div>
  );
};

const CareerProgram = () => {
  return (
    <Section
      id="career-program"
      className="relative overflow-hidden py-6 md:py-20"
      containerClassName="md:px-8">
      <div className="relative z-50 h-full flex max-md:flex-col-reverse items-center justify-between gap-3 md:gap-8 lg:gap-20">
        <div>
          <h2 className="text-3xl xl:text-5xl font-bold font-spartan mb-2">
            <span className="text-[#6711a4] text-shadow-blue-sm">
              KICKSTART YOUR
            </span>{" "}
            <br /> LEARNING{" "}
            <span className="text-[#6711a4] text-shadow-blue-sm">
              AND
            </span>{" "}
            CAREER <br />{" "}
            <span className="text-[#6711a4] text-shadow-blue-sm">
              WITH US TODAY!
            </span>
          </h2>
          <p className="text-[#6711a4] text-lg md:text-xl xl:text-2xl max-md:text-right">
            Get Exclusive access to our{" "}
            <span className="text-[#d6970c]">Gold</span> Learning suite. It
            Includes a <strong>Personalised Program</strong> with{" "}
            <strong>live training sessions</strong> led by global experts,{" "}
            <strong>24/7 Training Support</strong>, access to your{" "}
            <strong>Personal Dashboard</strong>. Unlock opportunities for
            <strong> internships</strong> and <strong>career growth</strong> as
            you build a strong foundation. Take the first step toward shaping
            your career with us today!
          </p>
        </div>
        <div>
          <CertificateProgramCard />
        </div>
      </div>
      <img
        className="hidden md:block z-0 absolute top-0 xl:-top-12 left-0 right-0"
        src={wavesImage}
        alt="Waves"
      />
      <div className="w-full mobile-waves block md:hidden z-0 absolute top-24 sm:top-0 left-0 right-0 overflow-hidden h-[300px] sm:h-[480px]"></div>
    </Section>
  );
};

export default CareerProgram;
