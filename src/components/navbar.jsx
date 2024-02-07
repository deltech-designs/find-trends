import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const openNav = () => {
    document.querySelector(".show").classList.add("block");
    alert("Hey");
  };

  return (
    <div className="flex justify-between text-white w-full md:p-4 p-3 cursor-pointer">
      {/* Logo on Large Screen  */}
      <div className="">
        <img src="assets/Logo.png" alt="findtrends_logo" />
      </div>

      <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-between md:gap-32 gap-4 md:bg-transparent bg-black md:p-0 p-4 show">
        <div className="flex items-center justify-between">
          <div className="md:hidden block">
            <img src="assets/Logo.png" alt="findtrends_logo" />
          </div>
          <div>
            <RxCross2 className="text-3xl md:hidden block" />
          </div>
        </div>

        <ul className="flex md:items-center md:justify-between md:flex-row flex-col gap-8">
          <li>About</li>
          <li>How it work</li>
          <li>Pricing</li>
          <li>Solution</li>
          <li>Features</li>
        </ul>

        <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-4">
          <a href="/* eslint-disable jsx-a11y/anchor-is-valid */">Login</a>
          <a
            href="/* eslint-disable jsx-a11y/anchor-is-valid */"
            className="rounded-full bg-white text-black px-5 py-2 w-32 text-center"
          >
            Register
          </a>
        </div>
      </div>
      <BiMenuAltRight className="text-3xl md:hidden block" onClick={openNav} />
    </div>
  );
}

export default Navbar;
