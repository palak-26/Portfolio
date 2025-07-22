import { useEffect, useState } from "react";
import Welcome from "./Components/Welcome";
import Portfolio from "./Components/Portfolio";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // 2 seconds before transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" >
      {showWelcome ? (
        <Welcome key="welcome" />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity:1, scale: 1.2}}
          animate={{ opacity: 1 , scale: 1  }}
          transition={{ duration: 1 }}
          
        >
          <Portfolio />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
