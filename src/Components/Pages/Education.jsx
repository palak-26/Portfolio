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
    <section id='Education' className="relative py-16">
  <h2 className="text-4xl text-white font-bold text-center mb-20"> Education</h2>

  <div className="relative max-w-5xl mx-auto">
    {/* Vertical Line */}
    <div className="absolute left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2"></div>

    {/* Timeline Entries */}
    <div className="space-y-10">

      {/* Item 1 - Left */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start md:justify-between relative"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/2 pr-8 md:text-center rounded-lg relative shadow-black  bg-purple-950 shadow-xl -top-10 p-4 text-center right-5 ">
          <h3 className="text-2xl text-white font-bold">B.Tech in Computer Science</h3>
          <p className="text-xl text-cyan-500 font-bold">Baderia Global Institute of Engineering and Management, Jabalpur, M.P</p>
          <p className=' text-rose-200 text-lg font-bold'>2022-2026</p>
          <p className="mt-2 text-slate-300 font-bold">CGPA: 8.03</p>
        </div>
        <div className="absolute left-1/2 h-1/4 w-1 bg-white transform rotate-90 -translate-y-1/2 top-10"></div>
        <div className="w-4 h-4 bg-violet-950 rounded-full absolute left-1/2 transform -translate-x-1/2 top-8"></div>
        <div className="w-full md:w-1/2"></div>
      </motion.div>
      {/* Item 2 - Right */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start md:justify-between relative"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/2"></div>
        <div className="absolute left-1/2 h-1/4  w-1 bg-white transform rotate-90 -translate-y-1/2 top-12  "></div>
        <div className="w-4 h-4 bg-violet-950 rounded-full absolute left-1/2 transform -translate-x-1/2 top-10  "></div>
        
        <div className="w-full md:w-1/2 pl-8 rounded-lg relative  shadow-black  bg-purple-950 shadow-xl text-center left-6 p-4 -top-10">
          <h3 className="text-2xl text-white font-bold">Higher Secondary Education</h3>
          <p className="text-xl text-cyan-500 font-bold">Ashoka Hall Senior Secondary School, Jabalpur, M.P</p>
          <p className=' text-rose-200 text-lg font-bold'>2021-2022</p>
          <p className="mt-2 text-slate-300 font-bold">PERCENTAGE: 91.4%</p>
        </div>
      </motion.div>
      {/* Left item -2 */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start md:justify-between relative"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false , amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/2 pr-8 md:text-center rounded-lg  shadow-black bg-purple-950 shadow-xl  relative -top-10 p-4 text-center right-5 ">
          <h3 className="text-2xl text-white font-bold">B.Tech in Computer Science</h3>
          <p className="text-xl text-cyan-500 font-bold">Ashoka Hall Senior Secondary School, Jabalpur, M.P</p>
          <p className=' text-rose-200 text-lg font-bold'>2020-2021</p>
          <p className="mt-2 text-slate-300 font-bold">PERCENTAGE: 90.8%</p>
        </div>
        <div className="absolute left-1/2 h-1/4 w-1 bg-white transform rotate-90 -translate-y-1/2 top-14"></div>
        <div className="w-4 h-4 bg-violet-950 rounded-full absolute left-1/2 transform -translate-x-1/2 top-12  "></div>
        <div className="w-full md:w-1/2"></div>
      </motion.div>
    </div>
  </div>
</section>


  )
}

export default Education