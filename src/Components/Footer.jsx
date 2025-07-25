import React from 'react';
import { FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import photo from '../assets/palak.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-10">
        
        {/* Avatar */}
        <div className="flex justify-center lg:justify-start">
          <img src={photo} alt="Palak Neekhra" className="h-36 w-36 rounded-full object-cover" />
        </div>

        {/* Contact + Socials */}
        <div className="text-center lg:text-center space-y-4 max-w-2xl">
          <h2 className="text-2xl font-bold">Let’s Connect</h2>

          <p className="text-base text-gray-300 font-semibold">
            I'm always open to new opportunities, collaborations, or just chatting about cool tech stuff!
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-blue-400">
            <a href="mailto:palakneekhra1234@gmail.com" className="hover:underline flex items-center gap-2">
              <SiGmail className="text-white" /> palakneekhra1234@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/palak-neekhra-98b518217/" target="_blank" className="hover:underline flex items-center gap-2">
              <FaLinkedin className="text-white" /> LinkedIn
            </a>
            <a href="https://github.com/palak-26" target="_blank" className="hover:underline flex items-center gap-2">
              <FaGithub className="text-white" /> GitHub
            </a>
            <a href="/resume.pdf" target="_blank" className="hover:underline flex items-center gap-2">
              <FaFile className="text-white" /> Resume
            </a>
          </div>

          {/* Credits */}
          <p className="text-sm text-gray-500">
            Designed & built by <span className="text-white font-semibold">Palak Neekhra</span> • © 2025
          </p>
          <p className="text-xs text-gray-600 font-semibold">
            Built with HTML, Tailwind CSS, React JS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
