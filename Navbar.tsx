import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="md:px-[6vw] uppercase fixed w-full bg-red-950 bg-opacity-75 z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <a href="#home">
            <img
              className="md:w-32 w-24 cursor-pointer"
              src="logospice.png"
              alt="..."
            />
          </a>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit py-5 bg-red-950 md:bg-opacity-0  left-0 ${
            menuOpen ? "top-[100%] " : "-top-[600%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8 text-xl">
            <li>
              <a
                href="#home"
                className="text-white hover:text-red-600 duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="text-white hover:text-red-600 duration-300"
              >
                Schedules
              </a>
            </li>
            <li>
              <a
                href="#rj"
                className="text-white hover:text-red-600 duration-300"
              >
                RJ's
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="text-white hover:text-red-600 duration-300"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/Form"
            target="_blank"
            className="bg-white md:px-6 md:py-3 px-2 py-2 text-sm md:text-lg hover:bg-red-800 hover:text-white duration-300 font-semibold uppercase"
          >
            Apply Now
          </a>

          {menuOpen ? (
            <IoCloseOutline
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden text-white"
            />
          ) : (
            <IoMenuOutline
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden text-white"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
