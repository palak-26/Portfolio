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
    <section
      id="About"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 gap-y-10 bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950"
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
          transition={{ duration: 0.8, ease: easeIn }}
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
                  transition={{ duration: 1}}
                >
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border-2 p-6 md:p-6 text-white w-full lg:w-full">
          <p className="text-sm sm:text-base md:text-base lg:text-lg font-semibold leading-relaxed">
          <Typewriter
          words={[" I am a final-year Computer Science undergraduate with a strong foundation in software development and a passion for building scalable, user-centric solutions. My technical expertise spans the MERN stack (MongoDB, Express.js, React.js, Node.js) and Data Structures and Algorithms in Java, enabling me to develop full-stack applications and write efficient, maintainable code. I am an open-source contributor with GirlScript Summer of Code, where I collaborated on real-world projects and worked within diverse development teams. Known for being adaptive, optimistic, and a fast learner, I thrive in collaborative environments and continuously seek opportunities to expand my knowledge.With a proactive mindset, strong communication skills, and a commitment to teamwork, I aim to contribute meaningfully to innovative and impact-driven engineering teams."]}
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
  );
};

export default About;
            