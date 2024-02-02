import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // const isButtonClicke = isButtonClicked ? "bg-orange-400" :'';
  const handleButtonClick = () => {
        setIsOpen(!isOpen);
        setIsButtonClicked(!isButtonClicked);
      };


  return (
    <nav className=" relative  flex justify-between items-center pt-5 pl-4 pb-4 pr-5 text-white bg-[#004274] transition-all duration-700">
      <div className=" font-bold text-xl z-50">Your Name</div>
     
      <div
        className={`transition-all duration-700`}
      >
        <ul
          className={` ${
            isOpen ? "" : "hidden"
          } flex-col gap-2 items-center md:relative absolute top-14 md:top-0 bg-[#004274] left-0 md:flex md:flex-row md:gap-9 right-0 text-center transition-all duration-300 z-30 `}
        >
          <li className="p-5 md:p-0 pt-0 hover:text-lime-600">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li className="p-5 md:p-0 pt-0 hover:text-lime-600">
            <Link to="/project" className="">
              Project
            </Link>
          </li>
          <li className="p-5 md:p-0 pt-0 hover:text-lime-600">
            <Link to="/resume" className="">
              Resume
            </Link>
          </li>
          <li className="p-5 md:p-0 pt-0 hover:text-lime-600">
            <Link to="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={handleButtonClick} className="block md:hidden md:transition-all duration-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
// md:w-1/3 w-3/4 h-40 md:h-7 justify-between md:flex md:flex-row flex flex-col  md:relative absolute md:top-1 -z-3 md:z-30 top-14 left-36 md:left-0 transition-all duration-700 ease-in-out md:bg-inherit bg-red-200
// `${
  // isOpen ? "" : "hidden"
// }  md:w-full h-40 md:h-7 w-3/4 justify-between md:flex md:flex-row flex flex-col  md:relative absolute md:top-1 -z-3 md:z-30 top-7 left-32 md:left-0 transition-all duration-700 ease-in-out  `}
