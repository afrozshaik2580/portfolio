import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Icons from "./Icons";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Fade } from "react-reveal";

function App(){
    
    return(
        <>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Icons></Icons>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            <div className="back-top">
                <i className="fas fa-long-arrow-alt-up"></i>
            </div>
        </>
    );
}
export default App;