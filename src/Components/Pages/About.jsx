import React from 'react';
import arrow from '../../assets/arrow.svg';
import photo from '../../assets/palak-1.png';
import { easeIn, motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const scale = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.2 },
  };
  const opacityblur = {
    hidden: { opacity: 0 , scale:0.5},
    visible: { opacity: 1, scale:1},
  };

  return (
    <motion.div
    initial={{ x:100, opacity: 0 }}
    animate={{ x:0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
      <section
      id="About"
      className="h-screen min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 gap-y-10 dark:bg-gradient-to-l dark:from-[#780206] dark:to-[#061161] text-white from-[#ef32d9] bg-gradient-to-r to-teal-500  dark:transition-all dark:duration-100"
    >
      {/* Heading */}
      <div>
        <h1 className="text-4xl sm:text-5xl mt-16 text-white font-bold mb-6 text-center">
        About
      </h1>
      </div>

      {/* Arrow Icon */}
      {/* <div className="w-40 lg: my-6">
        <img src={arrow} alt="arrow" className="mx-auto" />

      {/* Content */}
      <div className="flex flex-col  lg:flex-row gap-x-20 items-center justify-evenly justify-center  max-w-7xl w-full">
        {/* Image */}
        <motion.div
          variants={scale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.2, ease: easeIn }}
        >
          <div className='h-40 w-40 sm:h-44 sm:w-44 md:h-60 md:w-60 lg:h-72 lg:w-72'>
            <img
            src={photo}
            alt="Palak"
            className="h-full w-full scale-105 sm:h-full sm:w-full lg:h-full lg:w-full sticky top-32  object-contain  hover:scale-105 transition-all duration-700"
          />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
                  variants={opacityblur}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.3}}
                >
        <div className="bg-white/15 bg-opacity-10 dark:bg-slate-800/20 dark:backdrop-blur-lg backdrop-blur-lg rounded-3xl border-2 p-6 md:p-6 text-white w-full lg:w-full">
          <p className="text-sm sm:text-base md:text-base lg:text-lg font-semibold leading-relaxed">
          <Typewriter
          words={["I’m a final-year Computer Science undergraduate who is passionate, self-motivated, and growth-driven. Known for being adaptive, optimistic, and a quick learner, I thrive in collaborative environments and enjoy working with diverse teams. I have strong communication skills, a proactive mindset, and a genuine eagerness to explore new ideas and technologies. I value continuous learning and always seek opportunities to improve and contribute meaningfully."]}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={60}
          delaySpeed={2000}
          />
           </p>
        </div>
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
            