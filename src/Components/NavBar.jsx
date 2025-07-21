import React from 'react'
import { useState, useEffect } from "react";

const NavBar = () => {
   
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div>
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-purple-900 shadow-md' : 'bg-transparent'}
      `}
       >
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
             <h1 className="text-white text-xl font-bold">Palak Neekhra</h1>
             <ul className="flex gap-6 text-white font-medium">
                <a href="" className='hover:text-indigo-300 cursor-pointer'>Home</a>
                <a href="#About" className='hover:text-indigo-300 cursor-pointer'>About</a>
                <a href="Contact" className='hover:text-indigo-300 cursor-pointer'>Contact</a>
            </ul>
         </div>
        </nav>
      
        
    </div>
  )
}

export default NavBar