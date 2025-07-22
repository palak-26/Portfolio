import React from 'react'
import photo from '../assets/palak.png'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaHackerrank, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiGmail } from 'react-icons/si';
import { AnimatePresence, scale, transform } from 'framer-motion';
const Home = () => {
  return (
    <div id='Home'>
        <div id="heroSection" className='flex justify-around relative top-10 items-center' >
            <div id='leftSection' className='flex flex-col gap-y-2'>
                <h1 className='text-5xl font-bold text-white' >Hi There,</h1>
                <h1 className='text-5xl font-bold text-white' >I'm Palak Neekhra</h1>
                <h3 className='text-xl font-bold text-white' >I Am An Aspiring 
                    <span className='text-[#A8FFEB] text-2xl'>
                        <Typewriter
                       words={[" Full Stack Developer"," Java Developer"]}
                       loop={true}
                       cursor
                       cursorStyle="|"
                       typeSpeed={90}
                       deleteSpeed={60}
                       delaySpeed={2000}
                    />
                    </span>
                </h3>
                <button className=' mt-2 text-white bg-violet-600 shadow-2xl font-bold border-white rounded-full w-fit py-2 px-5 hover:scale-105 transition-transform duration-100'>
                    <a href="/resume.pdf"
                    target='_blank'
                    rel="noopener noreferrer"
                    >Resume</a>
                </button>
                

                <div className='flex w-fit gap-x-4 mt-2 text-2xl'>
                    <div className='h-auto w-auto  rounded-full bg-slate-950 p-2  hover:scale-105 transition-transform duration-100 shadow-lg'><a href="https://www.linkedin.com/in/palak-neekhra-98b518217/" target="_blank"><FaLinkedin className=' text-[#A8FFEB]'/></a></div>
                    <div className='h-auto w-auto rounded-full bg-black p-2  hover:scale-105 transition-transform duration-100 shadow-lg'><a href="https://github.com/palak-26" target="_blank"><FaGithub className='text-[#A8FFEB]'/></a></div>
                    <div className='h-auto w-auto rounded-full bg-black p-2  hover:scale-105 transition-transform duration-100 shadow-lg'><a href="https://leetcode.com/u/palak-26/" target="_blank"><SiLeetcode className='text-[#A8FFEB]'/></a></div>
                    <div className='h-auto w-auto rounded-full bg-black p-2  hover:scale-105 transition-transform duration-100 shadow-lg' ><a href="https://www.geeksforgeeks.org/user/palakneekhra1234/" target="_blank"><SiGeeksforgeeks className=' text-[#A8FFEB]'/></a></div>
                    <div className='h-auto w-auto rounded-full bg-black p-2  hover:scale-105 transition-transform duration-100 shadow-lg' ><a href="mailto:palakneekhra1234@gmail.com" target="_blank"><SiGmail className=' text-[#A8FFEB]'/></a></div>
                    <div className='h-auto w-auto rounded-full bg-black p-2  hover:scale-105 transition-transform duration-100 shadow-lg' ><a href="https://www.instagram.com/palakkk____26?igsh=ZHB2eDA2Y2E1YWh5" target="_blank"><FaInstagram className=' text-[#A8FFEB]'/></a></div>
                </div>
            </div>
            <AnimatePresence>
                <motion.div
                key="rightSection"
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:1}}
                >
                       <motion.img src={photo} alt="" className=' rounded-full h-80 w-80 shadow-2xl '/>
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Home