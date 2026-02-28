import { motion, AnimatePresence } from "framer-motion";
import MatrixCanvas from "./CoderLanding";
import CoderLanding from "./CoderLanding";

const Welcome = ({ onComplete }) => {
  return (
    <AnimatePresence>
      <div className="bg-indigo-800 min-h-screen w-full flex items-center justify-center dark:bg-rose-950">
        <motion.div
          key="welcome"
          className="bg-transparent flex items-center justify-center w-full h-full "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.7, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          onAnimationComplete={onComplete}
        >
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Welcome!!
          </motion.h1>
        </motion.div>
        
      </div>
    </AnimatePresence>
  );
};

export default Welcome;
