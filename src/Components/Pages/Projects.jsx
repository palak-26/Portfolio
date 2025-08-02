import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import snake from '../../assets/Projects/frontpage.avif';
import event from "../../assets/Projects/EventManagementSystem.png";
import expense from "../../assets/Projects/ExpenseTracker.png";
import employee from "../../assets/Projects/EmployeeManagementSystem.png";
import splitwise from "../../assets/Projects/Splitwise.png";
import tttg from "../../assets/Projects/TicTacToeGame.png";
import reverse from "../../assets/Projects/Reverse Typing Game.png";
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMoreRef = useRef(null);

  const projects = [
    { item: "Event Management System", status: "In Progress", img: event , github: "https://github.com/palak-26/College-Event-Management-System-.git"},
    { item: "Tic-Tac-Toe Game", status: "Completed", img: tttg ,github: "https://github.com/palak-26/miniProject_Tic-tac-toe-Game.git" },
    { item: "Expense Tracker", status: "In Progress", img: expense },
    { item: "Employee Management System", status: "In Progress", img: employee  },
    { item: "Splitwise Clone", status: "In Progress", img: splitwise },
    { item: "E-Commerce Website Landing Page", status: "In Progress", img: snake },
    { item: "Snake Game", status: "Completed", img: snake },
    { item: "Reverse Typing Game", status: "Completed", img: reverse },
    { item: "ChatBot based Ticketing System", status: "In Progress", img: snake },
  ];

  // Intersection Observer to trigger loading more cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 4, projects.length));
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [visibleCount]);

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div
      id="Projects"
      className="relative min-h-screen w-full px-4 md:px-10 lg:px-20 py-32 flex flex-col z-30 gap-10 overflow-y-scroll scroll-smooth scrollbar-hide items-center justify-center dark:bg-gradient-to-l dark:from-[#780206] dark:to-[#061161] text-white from-[#ef32d9] bg-gradient-to-r to-teal-500 "
    >
      {/* ✨ Neon glow background layers */}
      {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#9d4edd] rounded-full blur-[200px] opacity-25 z-0 "></div> */}
      {/* <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7b2cbf] rounded-full blur-[200px] opacity-20 z-20 dark:bg-gradient-to-bl dark:from-black dark:via-slate-800 dark:to-black"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-bl from-[#1a002f] via-[#6a00ff] to-[#1a002f] opacity-80 z-10 dark:dark:from-slate-950 dark:via-slate-800 dark:to-slate-950 "></div> */}

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col gap-10 items-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl text-center">Projects</h1>

        <div className="shadow-lg bg-indigo-50/5 backdrop-blur-lg shadow-black rounded-3xl dark:backdrop-blur-2xl overflow-y-scroll scroll-smooth scrollbar-hide py-20 px-10 flex flex-wrap justify-center gap-8 max-w-[90%] ">
          {projects.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.item}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className=" bg-[#F0F8FF]  hover:scale-110 transition-all duration-700 flex flex-col gap-4 duration-700  lg:p-10 p-6  border-none rounded-3xl w-[100%] sm:w-64 h-96 items-center justify-center text-center shadow-md shadow-black cursor-pointer"
            >
              <img src={item.img} alt={item.item} className="rounded-md " />
              <h3 className="text-black font-bold text-base lg:text-lg dark:text-black ">
                {item.item}
              </h3>
              <h4 className="text-slate-800 font-bold dark:text-slate-900 text-sm">
                Status: {item.status}
              </h4>
              <div className="text-black flex items-end justify-center w-auto dark:text-black">
                <a href={item.github}><FaRegArrowAltCircleRight /></a>
              </div>
            </motion.div>
          ))}

          {/* Loader trigger */}
          {visibleCount < projects.length && (
            <div ref={loadMoreRef} className="w-full h-10 mt-6 flex justify-center items-center">
              <span className="text-white text-sm animate-pulse">Loading more projects...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
