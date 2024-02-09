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
        {/* Navigation bar  */}
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
                <ul className="flex flex-col items-center gap-4 md:gap-8 text-white">
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

        {/* Landing page  */}
        <div className="flex justify-center items-center text-center">
          <div className="flex flex-col justify-between items-center text-center text-white pt-20 md:pt-">
            <h1 className="text-[32px] md:text-[72px] font-bold">
              Minimize your tabs.
            </h1>
            <h1 className="text-[32px] md:text-[72px] font-bold">
              Find the trends!
            </h1>
            <p className="mt-4 md:w-2/3 w-full text-center text-[12px] md:text-[23px] text-[#8B8B8B]">
              Don’t let your computer memories consumes all of those browser
              tabs. Findtrend let you gathers all of your favorite website into
              one place.
            </p>
            <div className="mt-8">
              <button className="bg-[#A8FF35] hover:bg-[#adf351] transition-all duration-75 focus:outline-none focus:ring focus:ring-[#a7ff3579] text-black px-6 py-2 rounded-full font-bold">
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex-col md:flex-row md:flex justify-center items-center gap-10 relative">
          <div className="bg-[rgb(24,24,24)] w-full md:w-[341px] h-[60px] shadow-lg flex justify-between items-center p-3  absolute left-7 -rotate-6 z-50">
            <div className="flex items-center gap-3">
              <img src="assets/twitter.png" alt="twitter_logo" />
              <a href="" className="text-white cursor-pointer">
                Cryptopunk - Search
              </a>
            </div>
            <span className="text-lg cursor-pointer">&times;</span>
          </div>
          <div className="bg-[#181818]  w-full md:w-[341px] h-[60px] shadow-lg flex justify-between items-center p-3 absolute left-72 top-3  rotate-2 z-40">
            <div className="flex items-center gap-3">
              <img src="assets/pintrest.svg" alt="twitter_logo" />
              <a href="" className="text-white text-lg">
                Cryptopunk - Search
              </a>
            </div>
            <span className="text-lg">&times;</span>
          </div>
          <div className="bg-[#181818]  w-full md:w-[341px]  h-[60px] shadow-lg flex justify-between items-center p-3 absolute left-1/2 -rotate-3">
            <div className="flex items-center gap-3">
              <img src="assets/facebook.svg" alt="twitter_logo" />
              <p className="text-white">Cryptopunk - Search</p>
            </div>
            <span>&times;</span>
          </div>
          <div className="bg-[#181818] w-full md:w-[341px]  h-[60px] shadow-lg flex justify-between items-center p-3 absolute left-3/4 top-3 rotate-2 z-0">
            <div className="flex items-center gap-3">
              <img src="assets/dribble.svg" alt="twitter_logo" />
              <p className="text-white">Cryptopunk - Search</p>
            </div>
            <span>&times;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
