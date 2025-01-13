import React from "react";
import Header from "../component/Header";
import Section from "../component/Section";
import EnrollNow from "../component/EnrollNow";

const Home = () => {
  return (
    <div
      id="home"
      className="relative max-sm:h-[calc(100vh-55px)] h-screen max-h-[760px] text-white bg-purple-900">
      <Section
        className="z-50 h-full"
        containerClassName="px-8 flex-grow flex flex-col justify-between"
        isSectionFooter
        isArrow>
        <Header />
        <div className="font-bold font-spartan flex items-end justify-between mb-6">
          <div>
            <div className="text-5xl xl:text-6xl max-sm:mb-6">
              BUILD YOUR <br /> FUTURE BY <br /> LEARNING <br /> VR, XR & A
              <span className="relative before:content-[''] before:block before:w-2 before:h-2 xl:before:w-2.5 xl:before:h-2.5 before:bg-customGreen before:absolute before:left-0.5 before:-top-2.5 xl:before:-top-3">
                I
              </span>
            </div>
            <EnrollNow className="max-sm:inline-block hidden text-2xl px-6 pt-2 pb-1.5 font-bold" />
          </div>
          <div className="max-sm:hidden text-3xl lg:text-4xl xl:text-5xl text-right">
            HELPING <br /> NIGERIANS TO <br /> GET EMPLOYED <br /> IN NO TIME
          </div>
        </div>
      </Section>

      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Home;
