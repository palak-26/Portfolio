import React from 'react'
import {motion} from 'framer-motion'

const Education = () => {
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="Education" className="min-h-screen w-full  justify-center p-28 md:px-10 lg:px-20 bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950">
      <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16">Education</h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0 text-base"></div>

        {/* Timeline Item 1 */}
        <motion.div
          className="relative flex flex-col md:flex-row items-center mb-12"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left content */}
          <div className="w-full md:w-1/2 md:pr-8 z-10">
            <div className="bg-purple-950 rounded-xl p-6 text-center shadow-lg ">
              <h3 className=" lg:text-xl text-white font-bold">B.Tech in Computer Science</h3>
              <p className="text-cyan-400  lg:text-lg font-semibold mt-1">Baderia Global Institute of Engineering and Management, Jabalpur</p>
              <p className="text-rose-200 mt-1 lg:text-base font-semibold">2022–2026</p>
              <p className="text-slate-300 mt-2 lg:text-base font-semibold">CGPA: 8.03</p>
            </div>
          </div>

          {/* Dot & Connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-violet-950 w-4 h-4 rounded-full z-20"></div>
        </motion.div>

        {/* Timeline Item 2 */}
        <motion.div
          className="relative flex flex-col md:flex-row items-center mb-12"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Right content */}
          <div className="w-full md:w-1/2 md:ml-auto md:pl-8 z-10">
            <div className="bg-purple-950 rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl md:text-2xl text-white font-bold">Higher Secondary Education</h3>
              <p className="text-cyan-400 text-base md:text-lg font-semibold mt-1">Ashoka Hall Senior Secondary School, Jabalpur</p>
              <p className="text-rose-200 mt-1 font-semibold">2021–2022</p>
              <p className="text-slate-300 mt-2 font-semibold">Percentage: 91.4%</p>
            </div>
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-violet-950 w-4 h-4 rounded-full z-20"></div>
        </motion.div>

        {/* Timeline Item 3 */}
        <motion.div
          className="relative flex flex-col md:flex-row items-center mb-4"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left content */}
          <div className="w-full md:w-1/2 md:pr-8 z-10">
            <div className="bg-purple-950 rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl md:text-2xl text-white font-bold">Secondary Education</h3>
              <p className="text-cyan-400 text-base md:text-lg font-semibold mt-1">Ashoka Hall Senior Secondary School, Jabalpur</p>
              <p className="text-rose-200 mt-1 font-semibold">2019–2020</p>
              <p className="text-slate-300 mt-2 font-semibold">Percentage: 90.8%</p>
            </div>
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-violet-950 w-4 h-4 rounded-full z-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
