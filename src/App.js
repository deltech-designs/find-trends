import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

// import Navbar from "./components/navbar";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main-container">
      <div className="md:container">
        <nav className="w-full p-3 lg:p-4 ">
          <div className="flex justify-between items-center">
            {/* Logo on Large Screen  */}
            <div className="flex items-center">
              <div className="flex-shrink-0 cursor-pointer">
                <img src="assets/Logo.png" alt="findtrends_logo" />
              </div>
            </div>
            {/* Navbar Links  */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8 text-white">
                <li>About</li>
                <li>How it work</li>
                <li>Pricing</li>
                <li>Solution</li>
                <li>Features</li>
              </ul>
            </div>

            {/* Navbar Button */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between gap-6">
                <a href="#" className="text-white">
                  Login
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white text-black px-5 py-2 w-32 text-center hover:bg-[#A8FF35] transition-all duration-75 focus:outline-none focus:ring focus:ring-[#a7ff3579]"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <BiMenuAltRight
                className="text-3xl text-white"
                onClick={toggleNavbar}
              />
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden fixed top-0 left-0 p-3 transition-all bg-black h-full w-full">
              <div className="flex justify-between items-center gap-10 ">
                <img src="assets/logo_icon.png" alt="" />
                <RxCross2
                  className="text-3xl text-white"
                  onClick={toggleNavbar}
                />
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-8">
                <ul className="flex flex-col items-center gap-8 text-white">
                  <li>About</li>
                  <li>How it work</li>
                  <li>Pricing</li>
                  <li>Solution</li>
                  <li>Features</li>
                </ul>

                {/* Navbar Button */}
                <div className="">
                  <div className="flex flex-col items-center justify-between gap-y-6">
                    <a href="#" className="text-white">
                      Login
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-white text-black px-5 py-2 w-32 text-center hover:bg-[#A8FF35] transition-all duration-75 focus:outline-none focus:ring focus:ring-[#a7ff3579]"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default App;
