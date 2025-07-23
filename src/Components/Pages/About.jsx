import React from 'react'
import arrow from '../../assets/arrow.svg'
import photo from '../../assets/palak-1.png'
import {easeIn, motion, scale} from 'framer-motion'

const About = () => {
  const scale ={
    hidden: {opacity:0 , scale:1},
    visible:{opacity:100, scale :1.2}
  }
  return (
    <div id='About' className='h-screen flex flex-col items-center top-5  relative top-32'>
        <h1 className='text-6xl relative top-10 -bottom-10 text-white font-bold'>About</h1>
        <div className='flex relative items-center flex-col'>
          <div className='w-full relative left-1/4 -bottom-20 '> <img src={arrow} alt="" className='w-60' /> </div>
          <div className='flex  justify-center justify-evenly '>
            <motion.div
            variants={scale}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false , amount:0.5 }}
            transition={{duration:0.8 , transform: easeIn}}
            >
               <img src={photo} alt="" className='static    h-96 w-96 ' />
            </motion.div>
          <div className='w-2/4 h-80 static rounded-3xl border-2 p-7 relative top-10  bg-slate-300 bg-opacity-10'>
           
           <p className='text-white font-semibold text-opacity-100 '>
            "I am a final-year Computer Science undergraduate with a strong foundation in software development and a passion for building scalable, user-centric solutions. My technical expertise spans the MERN stack (MongoDB, Express.js, React.js, Node.js) and Data Structures and Algorithms in Java, enabling me to develop full-stack applications and write efficient, maintainable code. I am an open-source contributor with GirlScript Summer of Code, where I collaborated on real-world projects and worked within diverse development teams. Known for being adaptive, optimistic, and a fast learner, I thrive in collaborative environments and continuously seek opportunities to expand my knowledge. With a proactive mindset, strong communication skills, and a commitment to teamwork, I aim to contribute meaningfully to innovative and impact-driven engineering teams."
           </p>
          </div>
        </div>
        
        </div>
    </div>
  )
}

export default About