import React, { useState } from "react";
import img1 from "../../Assets/1.png";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div >
      {/* Navigation Bar */}
      <nav className=" top-0 left-0 right-0 flex items-center justify-between p-4 bg-transparent">
        {/* Navigation for larger screens */}
        <ul className="hidden mt-5 ml-12 space-x-12 text-lg font-medium sm:flex md:space-x-16 md:text-xl lg:space-x-20 lg:text-2xl">
          <li>
            <a
              href="#"
              className="hover:text-customGreen"
              style={{ textShadow: "1px 1px 3px rgba(255, 255, 255, 0.8)" }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-customGreen"
              style={{ textShadow: "1px 1px 3px rgba(255, 255, 255, 0.8)" }}
            >
              PURPOSE
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-customGreen"
              style={{ textShadow: "1px 1px 3px rgba(255, 255, 255, 0.8)" }}
            >
              CONTACR US
            </a>
          </li>
          <li>
            <img
              src={img1}
              alt="Team Logo"
              className="hidden sm:block lg:mt-[-140px] lg:w-96 lg:h-96"
            />
          </li>
          <li>
            <a
              href="#"
              className="hover:text-customGreen"
              style={{ textShadow: "1px 1px 3px rgba(255, 255, 255, 0.8)" }}
            >
              PRIVACY
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-5 py-3 text-lg font-bold text-purple-900 rounded-full bg-customGreen hover:bg-green-600"
            >
              ENROLL NOW
            </a>
          </li>
        </ul>

        {/* Hamburger icon for small and medium screens */}
        <button
          className="absolute mt-20 text-3xl top-6 left-4 sm:block md:block lg:hidden text-customGreen focus:outline-none"
          onClick={toggleDrawer}
        >
          ☰
        </button>
      </nav>

      {/* Drawer for small and medium screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-purple-800 bg-opacity-90 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute text-3xl text-customGreen top-4 right-4 focus:outline-none"
          onClick={toggleDrawer}
        >
          ✕
        </button>
        <div className="flex flex-col items-center h-full space-y-6 mt-14 sm:space-y-8 md:space-y-10">
          <a
            href="#"
            className="text-lg text-white sm:text-xl md:text-2xl hover:text-customGreen"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-lg text-white sm:text-xl md:text-2xl hover:text-customGreen"
          >
            PURPOSE
          </a>
          <a
            href="#"
            className="text-lg text-white sm:text-xl md:text-2xl hover:text-customGreen"
          >
            TEAM
          </a>
          <a
            href="#"
            className="text-lg text-white sm:text-xl md:text-2xl hover:text-customGreen"
          >
            PRIVACY
          </a>
        </div>
      </div>

      {/* Centered image for small/medium screens */}
      <div className="flex justify-center mt-[-40px] sm:mt-[-60px] md:mt-[-80px] sm:flex lg:hidden md:flex">
        <img
          src={img1}
          alt="Team Logo"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
        />
      </div>
    </div>
  );
}

export default NavBar;
