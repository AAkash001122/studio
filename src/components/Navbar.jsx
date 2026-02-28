import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6 bg-[#f8f6f2] text-black shadow-sm">
      <div>
        <h1 className="text-lg font-semibold tracking-widest">WhiteMarble</h1>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-black-300 text-bold">
        <a href="#" className="hover:text-gray transition">
          Features
        </a>
        <a href="#" className="hover:text-gray transition">
          Spotlight
        </a>
        <a href="#" className="hover:text-gray transition">
          Pricing
        </a>
      </div>

      <div className="flex gap-3">
        {/* <button className="hidden md:block px-5 py-2 text-sm border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
          Contact Us
        </button> */}

        <Link to="/login">
          <button className="px-5 py-2 text-sm border border-white-600 rounded-full hover:bg-white hover:text-black transition">
            Login/Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
