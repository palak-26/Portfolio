import { motion, AnimatePresence } from "framer-motion";

const Welcome = ({ onComplete }) => {
  return (
    <AnimatePresence>
        <div className="bg-violet-950 flex items-center justify-center">
        <motion.div
        key="welcome"
        className="bg-transparent min-h-screen  flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={onComplete}
      >

      
        <motion.h1
          className="text-gray-400 text-7xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome!!
        </motion.h1>
      </motion.div>
        </div>
    </AnimatePresence>
  );
};

export default Welcome;
