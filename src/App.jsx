import { useEffect, useState } from "react";
import Welcome from "./Components/Pages/Welcome";
import Portfolio from "./Components/Portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Education from "./Components/Pages/Education";
import NavBar from "./Components/Pages/NavBar";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import Footer from "./Components/Footer";

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
        {showWelcome ? (
          <Welcome key="welcome" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
