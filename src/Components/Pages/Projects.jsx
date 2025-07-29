import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const slideUp = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="Projects"
      className="min-h-screen w-full px-4 md:px-10 lg:px-20 flex flex-col gap-10 items-center justify-center bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  dark:from-slate-950 dark:via-slate-800 dark:to-slate-950 dark:transition-all dark:duration-100"
    >
      {/* Heading */}
      <h1 className="text-white font-bold text-3xl sm:text-4xl text-center">Projects</h1>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-6  max-w-[90%]">
        {/* Project 1 */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border-2 border-white rounded-xl p-6 w-[50%] sm:w-64 h-52 flex items-center justify-center text-center shadow-md"
        >
          <h3 className="text-white font-bold text-lg sm:text-xl">Snake Game</h3>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2 }}
          className="bg-white/5 backdrop-blur-md border-2 border-white rounded-xl p-6 w-[50%] sm:w-64 h-52 flex items-center justify-center text-center shadow-md"
        >
          
          <h3 className="text-white font-bold text-lg sm:text-xl">Reverse Typing Game</h3>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.8 }}
          className="bg-white/5 backdrop-blur-md border-2 border-white rounded-xl p-6 w-[50%] sm:w-64 h-52 flex items-center justify-center text-center shadow-md"
        >
          <h3 className="text-white font-bold text-lg sm:text-xl">
            ChatBot Based Ticketing System
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
