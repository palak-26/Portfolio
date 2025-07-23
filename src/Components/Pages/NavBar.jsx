import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"} py-3`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="text-black text-lg font-bold hover:cursor-pointer">
              <Typewriter
                words={["Palak Neekhra"]}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-black font-medium">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <li key={item} className="group relative">
                <a
                  href={`/#${item}`}
                  className="hover:text-indigo-700 transition-colors duration-300"
                >
                  {item}
                </a>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black text-2xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden px-6 mt-4 pb-4 space-y-3 flex flex-col items-center text-black font-semibold">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                className="hover:text-indigo-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
