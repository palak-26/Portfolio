import React from 'react';
import arrow from '../../assets/arrow.svg';
import photo from '../../assets/palak-1.png';
import { easeIn, motion } from 'framer-motion';

const About = () => {
  const scale = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.2 },
  };

  return (
    <section
      id="About"
      className="py-20 px-4 md:px-10 lg:px-24 flex flex-col items-center bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl text-white font-bold mb-6 text-center">
        About
      </h1>

      {/* Arrow Icon */}
      <div className="w-40 -mx-10 sm:w-60 my-6">
        <img src={arrow} alt="arrow" className="mx-auto" />
      </div>

      {/* Content */}
      <div className="flex flex-col  lg:flex-row gap-20 items-center justify-center gap-10 max-w-6xl w-full">
        {/* Image */}
        <motion.div
          variants={scale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: easeIn }}
        >
          <img
            src={photo}
            alt="Palak"
            className="h-60 w-60 sm:h-80 sm:w-80 lg:h-96 lg:w-96  object-cover  hover:scale-105 transition-all duration-700"
          />
        </motion.div>

        {/* Description */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border-2 p-6 md:p-8 text-white w-full lg:w-10/12">
          <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
            I am a final-year Computer Science undergraduate with a strong foundation in software development and a passion for building scalable, user-centric solutions. My technical expertise spans the MERN stack (MongoDB, Express.js, React.js, Node.js) and Data Structures and Algorithms in Java, enabling me to develop full-stack applications and write efficient, maintainable code.
            <br /><br />
            I am an open-source contributor with GirlScript Summer of Code, where I collaborated on real-world projects and worked within diverse development teams. Known for being adaptive, optimistic, and a fast learner, I thrive in collaborative environments and continuously seek opportunities to expand my knowledge.
            <br /><br />
            With a proactive mindset, strong communication skills, and a commitment to teamwork, I aim to contribute meaningfully to innovative and impact-driven engineering teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
