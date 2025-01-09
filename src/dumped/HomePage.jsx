import React from "react";
import NavBar from "./NavBar/NavBar";
import Footerimg from "./Footerimg/Footerimg";
import img7 from "../Assets/7.png";
import img8 from "../Assets/8.png";
import img9 from "../Assets/9.png";

function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden text-white bg-purple-900">
      {/* NavBar Component */}
      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full overflow-hidden"
        src="/bgvideo.mp4" // Ensure the file is in /public
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <div className="grid text-xl font-semibold gap-y-10 md:grid-cols-2 lg:gap-x-[600px] lg:mt-80 ">
          <div className="items-center justify-center ml-6 ">
            <img src={img7} />
            <img src={img8} className="mt-[-265px]" />
          </div>

          <div className="flex-col items-center justify-center hidden mr-16 md:hidden lg:block mt-[40px]">
            <img src={img9} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute left-0 right-0 h-2 bg-purple-800 bottom-7"></div>

      <Footerimg />
    </div>
  );
}

export default HomePage;
