import React from "react";
import Section from "../component/Section";
import wavesImage from "../Assets/waves.png";

const CertificateProgramCard = () => {
  return (
    <div className="bg-black text-white rounded-lg w-full min-w-[290px] max-w-[290px] sm:min-w-[310px] sm:max-w-[310px] md:min-w-[330px] md:max-w-[330px] bg-[radial-gradient(circle_at_0%_0%,#58098f,#8420cb,#373737,#6d6672)] xl:mr-16">
      <div className="p-6">
        <h2 className="font-spartan text-3xl font-bold leading-none mb-2">
          <span className="text-customGreen">3 MONTH</span> <br /> CERTIFICATE{" "}
          <br /> PROGRAM
        </h2>
        <ul className="text-sm list-disc ml-4 font-medium [text-shadow:1px_1px_3px_rgba(255,255,255,0.8)]">
          <li>Choice of Subject in the core syllabus</li>
          <li>Study and Project materials</li>
          <li>Online and Offline Classes based on schedule</li>
          <li>Guaranteed Work Opportunity</li>
        </ul>
      </div>
      <hr className="border-2 border-white" />
      <div className="p-6">
        <p className="text-sm">30% off for Limited Time Only</p>
        <p className="text-[#ff3131] text-xl line-through">₦13799/month</p>
        <p className="text-3xl font-bold [text-shadow:1px_1px_3px_rgba(255,255,255,0.8)]">
          ₦10799/month
        </p>
        <button className="bg-customGreen text-[#6711a4] font-bold text-md sm:text-xl px-2 py-1 rounded mt-2">
          CHOOSE YOUR SYLLABUS
        </button>
      </div>
    </div>
  );
};

const CareerProgram = () => {
  return (
    <Section
      id="career-program"
      className="relative overflow-hidden py-6 md:py-20"
      containerClassName="md:px-8 ">
      <div className="relative z-50 h-full flex max-md:flex-col-reverse items-center justify-between gap-3 md:gap-8 lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold font-spartan mb-2">
            <span className="text-[#6711a4] [text-shadow:1px_2px_3px_rgba(103,17,164,0.8)]">
              KICKSTART YOUR
            </span>{" "}
            <br /> LEARNING{" "}
            <span className="text-[#6711a4] [text-shadow:1px_2px_3px_rgba(103,17,164,0.8)]">
              AND
            </span>{" "}
            CAREER <br />{" "}
            <span className="text-[#6711a4] [text-shadow:1px_2px_3px_rgba(103,17,164,0.8)]">
              WITH US TODAY!
            </span>
          </h2>
          <p className="text-[#6711a4] text-lg md:text-xl max-md:text-right">
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
    </Section>
  );
};

export default CareerProgram;
