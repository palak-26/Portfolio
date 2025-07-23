import React from 'react'
import photo from '../../assets/Projects/SnakeGame.png'
import {motion} from 'framer-motion';

const Projects = () => {
  const slideRight = {
  hidden: { opacity: 0 , y: -100 },
  visible: { opacity: 1, y: 0 },
  };
  return (
    <div id='Projects' className='p-10 flex flex-col relative top-32 gap-10 items-center  justify-center'>
      <span><h1 className='text-white font-bold text-4xl'>Projects</h1></span>
      <div className='w-5/6 h-auto rounded-lg border-white p-10 border-2 flex justify-evenly  shadow-black  shadow-2xl items-center justify-center gap-5 '>
         <motion.div
         variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        
         >
          <div className='bg-transparent h-52 w-52 flex items-center justify-center rounded-xl border-2 border-white'>
           <h3 className='text-white font-bold text-2xl'>Snake Game</h3>
         </div>
         
         </motion.div>
         <motion.div
         variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.4}}
         >
          <div className='bg-transparent h-52 w-52 text-center flex items-center justify-center rounded-xl border-2 border-white'>
           <h3 className='text-white font-bold text-2xl'>Reverse Typing Game</h3>
         </div>
         </motion.div>
         <motion.div
         variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2.2 }}
         >
          <div className='bg-transparent h-52 w-52 text-center flex items-center justify-center rounded-xl border-2 border-white'>
           <h3 className='text-white font-bold text-2xl'>ChatBot Based Ticketing System</h3>
         </div>
         </motion.div>
         
       </div>
    </div>
  )
}

export default Projects