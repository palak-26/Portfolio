import { Router, Routes ,Route} from "react-router-dom";
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
       <div >
         
         <div className="min-h-screen w-full flex flex-col gap-y-10 bg-[] bg-cover bg-center  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950 overflow-hidden overscroll-none">
            {/* <Router>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Home/>}/>
                </Routes>
            </Router> */}
            <NavBar/>
            <Home/>
            
        </div>
        <div className="min-h-screen w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  over-">
           <About/>
        </div>
        <div className="min-h-screen w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  over-">
           <Skills/>
        </div>
        <div className="min-h-screen w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  over-">
           <Projects/>
        </div>
        <div className="min-h-screen w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  over-">
           <Education/>
        </div>
        <div className="min-h-screen w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  over-">
           <Contact/>
        </div>
        <div className="h-fit w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950  over-">
          
           <Footer/>
        </div>
       </div>
  );
};

export default Portfolio;
