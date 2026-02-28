// src/components/CoderLanding.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  "Initializing portfolio...",
  "Booting up dev environment...",
  "Connecting to GitHub...",
  "Loading personal projects...",
  "Hi, I'm Palak Neekhra_",
];



const CoderLanding = ({onComplete}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + lines[lineIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  } else {
    // ✅ Call onComplete ONLY AFTER everything is typed
    const timeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000); // hold screen 2 sec after last line
    return () => clearTimeout(timeout);
  }
}, [charIndex, lineIndex, onComplete]);

  return (
    <AnimatePresence>
      <div className="relative bg-black min-h-screen w-full overflow-hidden flex items-center justify-center">
        <MatrixCanvas />

        <motion.div
          key="welcome"
          className="relative z-10 bg-transparent flex items-center justify-center w-full h-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-green-400 font-mono text-sm sm:text-base md:text-lg whitespace-pre-line text-center">
            {displayedText}
          </div>
        </motion.div>

        <style>{`
          .glitch {
            position: relative;
          }
          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            width: 100%;
          }
          .glitch::before {
            animation: glitchTop 1.2s infinite linear alternate-reverse;
            color: #0ff;
            top: -2px;
          }
          .glitch::after {
            animation: glitchBottom 1.2s infinite linear alternate-reverse;
            color: #f0f;
            top: 2px;
          }
          @keyframes glitchTop {
            0% { transform: translateX(0); }
            20% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            60% { transform: translateX(-1px); }
            80% { transform: translateX(1px); }
            100% { transform: translateX(0); }
          }
          @keyframes glitchBottom {
            0% { transform: translateX(0); }
            20% { transform: translateX(2px); }
            40% { transform: translateX(-2px); }
            60% { transform: translateX(1px); }
            80% { transform: translateX(-1px); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>
    </AnimatePresence>
  );
};

export default CoderLanding;
