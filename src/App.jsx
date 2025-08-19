import { useEffect, useState } from "react";
import Welcome from "./Components/Pages/Welcome";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Education from "./Components/Pages/Education";
import NavBar from "./Components/Pages/NavBar";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="overflow-y-scroll   h-screen scrollbar-hide scroll-smooth">
          {showWelcome ? (
            <Welcome onComplete={() => setShowWelcome(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        )}
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
