import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import html from '../../assets/Skills/html-1.svg';
import css from '../../assets/Skills/css-3.svg';
import js from '../../assets/Skills/javascript-1.svg';
import tcss from '../../assets/Skills/tailwind-css-1.svg';
import r from '../../assets/Skills/react-2.svg';
import ex from '../../assets/Skills/express-109.svg';
import node from '../../assets/Skills/nodejs-icon.svg';
import MongoDB from '../../assets/Skills/mongodb-icon-2.svg';
import sql from '../../assets/Skills/mysql-logo-pure.svg';
import c from '../../assets/Skills/c.svg';
import cpp from '../../assets/Skills/c-1.svg';
import java from '../../assets/Skills/java-4.svg';
import bs from '../../assets/Skills/bootstrap-5-1.svg';

const Skills = () => {
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="Skills" className="min-h-screen w-full py-16 justify-center items-center  px-6 md:px-12 lg:px-20 flex flex-col bg-gradient-to-bl from-purple-900 via-indigo-700 to-purple-950  dark:from-slate-950 dark:via-slate-800 dark:to-slate-950 dark:transition-all dark:duration-100">
      <h1 className="text-white font-bold text-3xl sm:text-4xl mb-12 text-center">My Skills Set</h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:items-center  gap-12 w-full">
        {/* Skill Boxes */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web Dev */}
            <div className="border-2 border-white rounded-xl p-5 bg-black/20">
              <h3 className="text-white text-lg font-bold mb-3 text-center">Web Dev</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={html} alt="HTML" className="h-14" />
                <img src={css} alt="CSS" className="h-14" />
                <img src={js} alt="JavaScript" className="h-14" />
              </div>
            </div>

            {/* MERN Stack */}
            <div className="border-2 border-white rounded-xl p-5 bg-black/20">
              <h3 className="text-white text-lg font-bold mb-3 text-center">MERN Stack</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={r} alt="React" className="h-14" />
                <img src={ex} alt="Express" className="h-14 w-28 bg-white p-1 rounded-md" />
                <img src={node} alt="Node.js" className="h-14" />
                <img src={MongoDB} alt="MongoDB" className="h-14" />
              </div>
            </div>

            {/* Programming Languages */}
            <div className="border-2 border-white rounded-xl p-5 bg-black/20">
              <h3 className="text-white text-lg font-bold mb-3 text-center">Programming Languages</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={cpp} alt="C++" className="h-14" />
                <img src={c} alt="C" className="h-14" />
                <img src={java} alt="Java" className="h-14" />
              </div>
            </div>

            {/* Frameworks + Databases */}
            <div className="border-2 border-white rounded-xl p-5 bg-black/20">
              <h3 className="text-white text-lg font-bold mb-3 text-center">Frameworks & DBs</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={tcss} alt="Tailwind" className="h-14 w-20" />
                <img src={bs} alt="Bootstrap" className="h-14" />
                <img src={sql} alt="MySQL" className="h-14 bg-slate-50 rounded-md" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Skills;
