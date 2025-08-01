import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggle from "./DarkModeToggle";
import logodark from "../../assets/logodark.png"
import {motion , AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <nav className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-md dark:bg-slate-900 dark:transition-all dark:duration-100 " : "bg-white/80 backdrop-blur dark:bg-slate-800/15 dark:backdrop-blur-lg  dark:transition-all dark:duration-100"} py-5`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-around items-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-4 ">
            {/* Light Mode Logo (black) */}
                <img src={logo} alt="Logo Light" className="h-10 block dark:hidden" />

            {/* Dark Mode Logo (cyan) */}
                <img src={logodark} alt="Logo Dark" className="h-10 hidden dark:block" />

            
            <h1 className="text-black dark:text-white text-lg font-bold hover:cursor-pointer">
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
          <div className="flex justify-evenly items-center">
            <ul className="hidden md:flex gap-6 text-black font-medium dark:text-white">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <li key={item} className="group space-y-2">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="group-hover:text-indigo-700 transition-colors duration-300 dark:group-hover:text-slate-500 "
              >
                {item}
              </Link>
              <div className="group-hover:bg-indigo-700 h-1 rounded-t-md dark:group-hover:bg-slate-300"></div>
            </li>))}
            
          </ul>
          <div className="rounded-full h-5 w-5 -mt-4 ml-6 mr-6 md:-mt-6 lg:-mt-6">
            <DarkModeToggle/>
          </div>

          {/* Hamburger Menu */}
          <div className="visible md:invisible lg:invisible">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white text-2xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        
          </div>
          {/* Mobile Nav */}
        <AnimatePresence>
  {isOpen && (
    <motion.div
      className="md:hidden px-6 mt-4 pb-4 space-y-3 flex flex-col items-center text-black dark:text-white font-semibold"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
        <a
          key={item}
          href={`/#${item}`}
          className="block py-2 hover:text-slate-700 transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          {item}
        </a>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </div>
  );
};

export default NavBar;
