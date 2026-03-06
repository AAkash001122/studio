import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "block text-base font-medium text-gray-300 hover:text-[#00E676] transition-colors duration-300";

  return (
    <nav className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 z-50 -mt-3 -mb-3">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block leading-none"
        >
          <div className="h-16 md:h-20 overflow-hidden">
            {" "}
            {/* Container height badha di hai (prev: h-12) */}
            <img
              src="/logowm.png"
              alt="WhiteMarble Production Logo"
              // Width badha di hai (prev: w-32) aur height ko full kar diya
              className="h-22 w-48 md:w-56 object-cover rounded-xl"
            />
          </div>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="text-sm font-semibold text-white hover:text-[#00E676] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="text-sm font-semibold text-white hover:text-[#00E676] transition-colors"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold text-white hover:text-[#00E676] transition-colors"
          >
            About
          </Link>
          <Link
            to="/progress"
            className="text-sm font-semibold text-white hover:text-[#00E676] transition-colors"
          >
            Process
          </Link>

          {/* <Link
            to="/clients"
            className="text-sm font-semibold text-white hover:text-[#00E676] transition-colors"
          >
            Achievements
          </Link> */}

          <Link
            to="/contact"
            className="text-sm font-semibold text-white hover:text-[#00E676] transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] w-full px-6 pb-6 pt-2 space-y-3 border-b border-white/10 shadow-2xl">
          <Link to="/" className={navLink} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/work" className={navLink} onClick={() => setIsOpen(false)}>
            Work
          </Link>
          <Link
            to="/about"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/progress"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>

          {/* <Link
            to="/clients"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            Clients / Achievements
          </Link> */}

          <Link
            to="/contact"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
