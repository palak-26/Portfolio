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
    <div className="w-full overflow-x-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Home Section */}
      <section className="min-h-screen w-full flex flex-col justify-center px-4 md:px-10 lg:px-20 gap-y-10 bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950">
        <Home />
      </section>

      {/* About Section */}
      <section >
        <About />
      </section>

      {/* Skills Section */}
      <section >
        <Skills />
      </section>

      {/* Projects Section */}
      <section >
        <Projects />
      </section>

      {/* Education Section */}
      <section >
        <Education />
      </section>

      {/* Contact Section */}
      <section >
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col lg:gap-y-6 bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950">
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
