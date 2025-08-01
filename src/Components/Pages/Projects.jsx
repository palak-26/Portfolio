import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/Projects/SnakeGame.png';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMoreRef = useRef(null);

  const projects = [
    { item: "Event Management System", status: "In Progress", img: logo },
    { item: "Tic-Tac-Toe Game", status: "Completed", img: logo },
    { item: "Expense Tracker", status: "In Progress", img: logo },
    { item: "Employee Management System", status: "In Progress", img: logo },
    { item: "Splitwise Clone", status: "In Progress", img: logo },
    { item: "E-Commerce Website Landing Page", status: "In Progress", img: logo },
    { item: "Snake Game", status: "Completed", img: logo },
    { item: "Reverse Typing Game", status: "Completed", img: logo },
    { item: "ChatBot based Ticketing System", status: "In Progress", img: logo },
  ];

  // Intersection Observer to trigger loading more cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 4 , projects.length));
        }
      },
      {
        threshold: 1,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

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
      className="p-32 min-h-screen w-full px-4 md:px-10 lg:px-20 flex flex-col gap-10 overflow-y-scroll scroll-smooth scrollbar-hide items-center justify-center bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950 transition-all duration-100"
    >
      <h1 className="text-white font-bold text-3xl sm:text-4xl text-center">Projects</h1>

      <div className="shadow-lg bg-indigo-100/20 shadow-black rounded-3xl backdrop-blur-lg dark:bg-white/5 overflow-y-scroll scroll-smooth scrollbar-hide py-20 px-10 flex flex-wrap justify-center gap-8 max-w-[90%]">
        {projects.slice(0, visibleCount).map((item) => (
          <motion.div
            key={item.item}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="hover:scale-110 transition-all duration-700 backdrop-blur-md bg-black/30 dark:bg-white/50 border-none rounded-3xl p-6 w-[50%] sm:w-64 overflow-hidden h-96 flex items-center justify-center text-center shadow-md shadow-black cursor-pointer"
          >
            <div className="flex flex-col gap-4 h-auto">
              <img src={item.img} alt={item.item} className="rounded-md" />
              <h3 className="text-white font-bold text-lg sm:text-xl dark:text-black dark:font-semibold">
                {item.item}
              </h3>
              <h4 className="text-slate-400 text-lg font-bold sm:text-sm dark:text-slate-900">
                Status: {item.status}
              </h4>
            </div>
          </motion.div>
        ))}

        {/* Trigger to load more cards */}
        {visibleCount < projects.length && (
          <div ref={loadMoreRef} className="w-full h-10 mt-6 flex justify-center items-center">
            <span className="text-white text-sm animate-pulse">Loading more projects...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
