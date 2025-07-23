import React from 'react'
import { useState, useEffect } from "react";
import {Typewriter} from "react-simple-typewriter";
import logo from "../../assets/logo.png"

const NavBar = () => {
   
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >1;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className='flex justify-center h-28'>
            <nav className={ 'fixed top-0 z-50 transition-all duration-300 '}
            >
         
              <div className="max-w-screen-md w-screen mx-auto px-4 py-4 h-auto bg-white rounded-b-md flex justify-around items-center ">
                <div className='h-auto w-auto'><img src={logo} alt="" className='h-10 hover: cursor-pointer ' /></div>
                <h1 className="text-black text-xl font-bold hover:cursor-pointer">
                    <Typewriter
                       words={["Palak Neekhra"]}
                       cursor
                       cursorStyle="_"
                       typeSpeed={90}
                       deleteSpeed={60}
                       delaySpeed={2000}
                    />
                </h1>
                <ul className="flex gap-6 text-black font-medium">
                <li className='group relative'>
                    <a href="/#Home" className='hover:text-indigo-700 cursor-pointer transition-colors duration-300 '>Home</a>
                    <div className='absolute -bottom-5 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
                </li>
                <li className='group relative'>
                    <a href="/#About" className='hover:text-indigo-700 cursor-pointer transition-colors duration-300 '>About</a>
                    <div className='absolute -bottom-5 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
                </li>
                <li className='group relative'>
                    <a href="/#Skills" className='hover:text-indigo-700 cursor-pointer transition-colors duration-300 '>Skills</a>
                    <div className='absolute -bottom-5 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
                </li>
                <li className='group relative'>
                    <a href="/#Projects" className='hover:text-indigo-700 cursor-pointer transition-colors duration-300 '>Projects</a>
                    <div className='absolute -bottom-5 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
                </li>
                <li className='group relative'>
                    <a href="/#Education" className='hover:text-indigo-700 cursor-pointer transition-colors duration-300 '>Education</a>
                    <div className='absolute -bottom-5 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
                </li>
                <li className='group relative'>
                    <a href="/#Contact" className='hover:text-indigo-700 cursor-pointer transition-colors duration-300 '>Contact</a>
                    <div className='absolute -bottom-5 left-0 w-full h-1 bg-indigo-700 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
                </li>
                </ul>
              </div>
         
            </nav>
       </div>
  )
}

export default NavBar