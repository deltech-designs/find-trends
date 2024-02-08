// import React, { useState } from "react";
// import { BiMenuAltRight } from "react-icons/bi";
// import { RxCross2 } from "react-icons/rx";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full p-2 lg:p-4 ">
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

        <div className="md:hidden block">
          <BiMenuAltRight className="text-3xl" />
        </div>
      </div>

      {/* {isOpen && {}} */}
    </nav>
  );
}

export default Navbar;
