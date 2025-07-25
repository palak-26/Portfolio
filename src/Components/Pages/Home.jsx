import React from 'react'
import photo from '../../assets/palak.png'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaHackerrank, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiGmail } from 'react-icons/si';
import {motion} from 'framer-motion'
const Home = () => {
    const scale ={
    hidden: {opacity:0 , scale:0},
    visible:{opacity:100, scale :1},
    wait: {duration:0.5},
  }
  return (
    <section id='Home' >
        <div >
        <div id="heroSection" className='flex justify-around sm:flex-col-reverse lg:flex-row md:flex-col-reverse relative top-24 items-center   gap-5 ' >
            <div id='leftSection' className='flex flex-col gap-y-2'>
                <h1 className='lg:text-7xl font-bold text-white ' >Hi There,</h1>
                <h1 className='text-7xl font-bold text-white' >I'm Palak Neekhra</h1>
                <h3 className='text-3xl font-bold text-white' >I Am An Aspiring 
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
                <button className=' mt-2 text-white text-lg bg-violet-600 shadow-2xl font-bold border-white rounded-full w-fit py-2 px-5 hover:scale-105 transition-transform duration-100'>
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

            <motion.div
            variants={scale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            >
                <div className="h-44 w-44 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96">
                    <img
                    src={photo}
                    alt="Palak Neekhra"
                    className="h-full w-full rounded-full object-cover shadow-black shadow-xl hover:scale-105 transition-all duration-1000 cursor-pointer"
                    />
                </div>
            </motion.div>    
        </div>
    </div>
    </section>
  )
}

export default Home