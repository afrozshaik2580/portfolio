import React from "react";
import {Fade ,Zoom} from "react-reveal";
function Navbar(){
    return(
        <Fade top>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={require("./img/logo.png")} alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Zoom cascade top>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skill">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#project">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                </Zoom>
              </div>
            </div>
        </nav>
        </Fade>
    )
}
export default Navbar;