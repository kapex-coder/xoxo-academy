import React from "react";
// import img32 from "../Assets/32.png";
// import img33 from "../Assets/33.png";
// import img34 from "../Assets/34.png";
// import Footerimg from "../component/Footerimg/Footerimg";

const GoalsUI = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-purple-900">
      {/* Left astronaut image */}
      <div className="absolute top-0 left-0 w-2/3 sm:w-1/4 md:w-2/6 2xl:w-2/6 lg:w-2/6">
        {/* <img
          src={img34}
          alt="Left Astronaut"
          className="ml-[30%] sm:ml-[-30%] md:ml-[100%] 2xl:ml-[-290px] lg:ml-[-290px] mx-auto 
          2xl:rotate-0 lg:rotate-0 md:rotate-[270deg] md:mt-[-120px] rotate-[260deg]
          2xl:mt-[-100px] lg:mt-[-100px] mt-[-150px]"
        /> */}
      </div>

      {/* Right astronaut image */}
      <div className="absolute top-0 right-0 w-2/3 sm:w-1/4 md:w-2/6 2xl:w-2/6 lg:w-2/6">
        {/* <img
          src={img34}
          alt="Right Astronaut"
          className="sm:ml-24 2xl:ml-[200px] lg:ml-[200px] mt-[750px] md:mt-[1000px] md:ml-[-280px] 
          2xl:mt-[-100px] lg:mt-[-100px] lg:rotate-0 2xl:rotate-0 md:rotate-[260deg] rotate-[260deg] ml-[-60px] relative"
        /> */}
      </div>

      {/* Content Section */}
      <div className="flex flex-row ">
        {/* <img src={img32} className="h-[600px] w-[600px]" />
        <img src={img33} className="h-[600px] w-[600px] mt-10" /> */}
      </div>

      {/* Footer */}
      {/* <Footerimg /> */}
    </div>
  );
};

export default GoalsUI;
