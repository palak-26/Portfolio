import React from 'react'
import html from '../../assets/Skills/html-1.svg'
import css from '../../assets/Skills/css-3.svg'
import js from '../../assets/Skills/javascript-1.svg'
import tcss from '../../assets/Skills/tailwind-css-1.svg'
import r from '../../assets/Skills/react-2.svg'
import ex from '../../assets/Skills/express-109.svg'
import node from '../../assets/Skills/nodejs-icon.svg'
import MongoDB from '../../assets/Skills/mongodb-icon-2.svg'
import sql from '../../assets/Skills/mysql-logo-pure.svg'
import c from '../../assets/Skills/c.svg'
import cpp from '../../assets/Skills/c-1.svg'
import java from '../../assets/Skills/java-4.svg'
import bs from '../../assets/Skills/bootstrap-5-1.svg'
import arrow from '../../assets/arrow.svg'
import photo from '../../assets/palak-1.png'
import {motion } from 'framer-motion';

const Skills = () => {
  const slideLeft = {
    hidden: {opacity:0 , x: -300},
    visible: {opacity:100 , x: 0},
    
  };
  const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  };
  return (
    <div id='Skills' className='p-10 flex flex-col items-center relative top-24 justify-center gap-10'>
      <div> 
            <h1 className='text-white font-bold text-4xl mb-10 '>My Skills Set</h1>
      </div>
      <div className='flex justify-around '>
        <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        >
          <div className='bg-black rounded-3xl p-6 flex flex-wrap  justify-center items-center '>
          <div className='flex gap-5 p-5  flex-wrap w-auto items-center  '>
           <div className='flex gap-5 '>
             <div className='h-auto border-white border-2 p-5 rounded-lg flex flex-col items-center gap-2'>
              <div><h3 className='text-white font-bold text-lg' >Web Dev</h3></div>
              <div className='flex gap-5 '>
                <img src={html} alt="" className='h-16'/>
                <img src={css} alt="" className='h-16'/>
                <img src={js} alt="" className='h-16'/>
              </div>
            </div>
            <div className='h-auto border-white border-2 p-5 rounded-lg flex flex-col items-center gap-2 ' >
              <div><h3 className='text-white font-bold text-lg' >MERN Stack</h3></div>
              <div className='flex gap-5'><img src={r} alt="" className='h-16'/>
              <img src={ex} alt="" className='h-16 w-40 bg-slate-300 p-2 rounded-md'/>
              <img src={node} alt="" className='h-16'/>
              <img src={MongoDB} alt="" className='h-16'/></div>
            </div>
            <div className='h-auto border-white border-2 p-5 rounded-lg flex flex-col items-center gap-2'>
              <div><h3 className='text-white font-bold text-lg' >Programming Languages</h3></div>
              <div className='flex gap-5 '>
                <img src={cpp} alt="" className='h-16'/>
               <img src={c} alt="" className='h-16'/>
               <img src={java} alt="" className='h-16'/>
              </div>
            </div>
           </div>
           <div className='flex justify-center items-center w-full '>
            <div className='flex items-center gap-10 '>
             <div className='h-auto border-white border-2 p-5 rounded-lg flex flex-col items-center gap-2'>
              <div><h3 className='text-white font-bold text-lg' >Frameworks</h3></div>
              <div className='flex gap-10 '>
                <img src={tcss} alt="" className='h-16 w-1/2'/>
                <img src={bs} alt="" className='h-16'/>
              </div>
            </div>
            <div className='h-auto border-white border-2 p-5 rounded-lg flex flex-col items-center gap-2'>
              <div><h3 className='text-white font-bold text-lg' >Databases</h3></div>
              <div className='flex gap-5 '>
                <img src={sql} alt="" className='h-16' />
              </div>
           </div>
            </div>
           </div>
          
          </div>
        
          </div>
        </motion.div>
          
      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        >
            <img src={photo} alt="" className='relative -bottom-20 h-96 min-w-96' />
          
        </motion.div>
     
      <div>
        
      </div>
      
    </div>
    <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        >
          <div className='w-full relative left-96 -top-20'> <img src={arrow} alt="" className='w-60 mt-10  -rotate-180' /> </div>
        </motion.div>
    
    </div>
  )
}

export default Skills



  