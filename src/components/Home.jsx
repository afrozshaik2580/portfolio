import React from "react";
import { Fade,Zoom } from "react-reveal";
function Home(){
    return(
        <section id="home" className="banner-section">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6">
                                <div className="banner-text">
                                    <Fade right><h1 className="" data-wow-duration="1s">I'M Afroz Shaik</h1></Fade>
                                    <Fade top><h4 className=""data-wow-duration="2s">Full Stack Developer</h4></Fade>
                                    <Fade bottom><p className="" data-wow-duration="1s">Hello, I am Afroz Shaik and I am from India. Taking Web Development as a profession not only fulfills my pocket but also my heart because it has been my passion since my early teenage.</p></Fade>
                                    <Zoom ><a href="./img/resume.pdf" className="all-btn" download="resume.pdf">
                                        Download CV
                                        <i className="fas fa-download"></i>
                                    </a>
                                    </Zoom>
                                </div>
                            </div>
                            <Zoom>
                            <div className="col-lg-6 col-sm-6">
                                <div className="banner-img">
                                    <img className="" data-wow-duration="2s" src="img/afroz-shaik.jpeg" alt="banner image"/>
                                </div>
                            </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;