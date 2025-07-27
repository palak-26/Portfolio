import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Footer from "./Footer";
import Contact from "./Pages/Contact";

const Portfolio = () => {
  return (
    <div className="w-full overflow-x-hidden  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  dark:bg-gray-900  ">
      {/* Navigation */}
      <NavBar className="dark:bg-gray-900" />

      Home Section
      {/* <section className="dark:bg-gray-900" > */}
        <Home />
      {/* </section> */}

      {/* About Section */}
      {/* <section className="dark:bg-gray-900" > */}
        <About />
      {/* </section> */}

      {/* Skills Section */}
      {/* <section className="dark:bg-gray-900" > */}
        <Skills />
      {/* </section> */}

      {/* Projects Section */}
      {/* <section className="dark:bg-gray-900" > */}
        <Projects />
      {/* </section> */}

      {/* Education Section */}
      {/* <section className="dark:bg-gray-900"> */}
        <Education />
      {/* </section> */}

      {/* Contact Section */}
      {/* <section className="dark:bg-gray-900" > */}
        <Contact />
      {/* </section> */}

      {/* Footer */}
      <footer className="w-full flex flex-col lg:gap-y-6 bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950">
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
