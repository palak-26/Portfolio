import React from 'react'
import photo from '../../assets/palak.png'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaHackerrank, FaInstagram, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiGmail } from 'react-icons/si';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import { FiDownload, FiDownloadCloud } from 'react-icons/fi';
const Home = () => {
    const scale ={
    hidden: {opacity:0 , scale:0},
    visible:{opacity:100, scale :1},
    wait: {duration:0.5},
  }
  return (

    <section id='Home' >
        <div >
        <div id="heroSection" className='min-h-screen w-full flex flex-col-reverse justify-center items-center px-4 md:px-20 lg:px-28  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-800 dark:to-slate-950 dark:transition-all dark:duration-100  justify-evenly lg:flex-row items-center gap-5 ' >
            <div id='leftSection' className='flex flex-col  gap-y-2'>
                <h1 className='lg:text-5xl font-bold text-white md:text-3xl text-xl px-2 ' >Hi There,</h1>
                <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold text-white px-2' >I'm Palak Neekhra</h1>
                <h3 className='text-xl lg:text-4xl md:text-xl font-bold text-white px-2' >I Am An Aspiring 
                    <span className='text-[#A8FFEB]  md:text-xl lg:text-xl'>
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
                <button className=' w-36 text-base lg:text-lg px-1 py-2  mt-2 text-white text-center bg-violet-600 shadow-2xl font-bold border-white rounded-full hover:scale-105 transition-transform duration-100'>
                    <a href="/resume.pdf"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='flex justify-evenly justify-center items-center'
                    >Resume <a href="/resume.pdf" download ><FiDownload/></a> </a>
                </button>
                

                <div className='flex w-fit gap-x-4 mt-2 text-lg lg:text-2xl'>
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
                <div className="h-44 w-44 mt-20 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 ">
                    <img
                    src={photo}
                    alt="Palak Neekhra"
                    className="h-full w-full rounded-full object-cover sticky shadow-black shadow-xl hover:scale-105 transition-all duration-1000 cursor-pointer"
                    />
                </div>
            </motion.div>  
             
        </div>
        <div id='about'>
            <About/>
        </div>
        <div id='skills'>
            <Skills/>
        </div>
        <div id='projects'>
            <Projects/>
        </div>
        <div id='education'>
            <Education/>
        </div>
        <div id='Contact'>
            <Contact/>
        </div>
    </div>
    </section>
  )
}

export default Home