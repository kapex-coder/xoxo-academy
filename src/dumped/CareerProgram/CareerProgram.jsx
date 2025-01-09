import React from "react";
// import CopyofxoxoEDU from "../Assets/CopyofxoxoEDU.png";
// import img23 from "../Assets/23.png";
// import img24 from "../Assets/24.png";
// import img25 from "../Assets/25.png";
// import img26 from "../Assets/26.png";
// import img27 from "../Assets/27.png";
// import img28 from "../Assets/28.png";
// import img29 from "../Assets/29.png";
// import img30 from "../Assets/30.png";

function CareerProgram() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 mb-0 bg-white">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: `url(${CopyofxoxoEDU})`,
        }}
      ></div> */}

      {/* Main Content */}

      <div className="flex flex-row mb-[-180px]">
        <div className="flex flex-col">
          {/* <img src={img23} className="mt-[-100px]" />
          <img src={img24} className="mt-[-380px] ml-16" /> */}
        </div>
        <div>
          {/* <img src={img30} className="mt-16" />
          <img src={img25} className="mt-[-740px] h-[450px] w-[450px] ml-28" />
          <img src={img26} className="mt-[-300px] h-[450px] w-[450px] ml-32" />
          <img src={img27} className="mt-[-240px] h-[320px] w-[320px] ml-32" />
          <img
            src={img28}
            className="mt-[-300px] h-[320px] w-[320px] ml-[88px]"
          />
          <img
            src={img29}
            className="mt-[-350px] h-[450px] w-[450px] ml-[50px] "
          /> */}
          <div className="mt-[-200px] ml-[150px]">
            <button className="px-8 py-2 text-xl font-bold text-purple-900 rounded-lg bg-customGreen hover:bg-green-600">
              CHOOSE YOUR SYLLABUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerProgram;
