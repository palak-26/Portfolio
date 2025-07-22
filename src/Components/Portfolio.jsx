import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

const Portfolio = () => {
  return (
        <div className="min-h-screen w-full flex flex-col gap-y-10  bg-gradient-to-r from-purple-950 via-indigo-700 to-purple-950 ">
            <NavBar />
            <Home />
            <About/>
            {/* <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes> */}
        </div>
  );
};

export default Portfolio;
