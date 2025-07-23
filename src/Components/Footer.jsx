import React from 'react'
import { FaFile, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { SiGmail, SiLinkedin, SiReactiveresume } from 'react-icons/si'
import photo from '../assets/palak.png'


const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-10 flex justify-evenly items-center" >
            <div className='h-auto w-44'><img src={photo} alt="" className='h-40 w-40 relative  left-52 rounded-full' /></div>
            <div class="container mx-auto px-4 text-center space-y-4">
    
             <h2 class="text-2xl font-bold">Let’s Connect</h2>
             <p class="text-base text-gray-300 max-w-xl mx-auto font-semibold">
              I'm always open to new opportunities, collaborations, or just chatting about cool tech stuff!
             </p>

    <div class="flex flex-wrap justify-center p-2 gap-6 text-blue-400 text-sm">
      <a href="mailto:palakneekhra1234@gmail.com" className="hover:underline flex gap-2"><SiGmail className='text-white relative top-1'></SiGmail> palakneekhra1234@gmail.com</a>
      <a href="https://www.linkedin.com/in/palak-neekhra-98b518217/" target="_blank" className="hover:underline flex gap-2"> <FaLinkedin className='text-white relative top-1'/>LinkedIn</a>
      <a href="https://github.com/palak-26" target="_blank" className="hover:underline flex gap-2"><FaGithub className='text-white relative top-1'></FaGithub> GitHub</a>
      <a href="/resume.pdf" target="_blank" className="hover:underline flex gap-2"><FaFile className='text-white relative top-1'></FaFile> Resume</a>
    </div>

    <p class="text-sm text-gray-500">
      Designed & built by <span class="text-white font-semibold">Palak Neekhra</span> • © 2025
    </p>
    
    <p class="text-xs text-gray-600 font-semibold">
      Built with HTML,Tailwind CSS, React JS
    </p>
    
  </div>
</footer>


    </div>
  )
}

export default Footer