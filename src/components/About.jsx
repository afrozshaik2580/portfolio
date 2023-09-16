import React from "react";
import { Fade } from "react-reveal";
function About(){
    return(
        <section id="about" className="about-section section-bg pt-100 pb-100">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div className="row align-items-center">
                    <Fade bottom>
                    <div className="col-md-4">
                        <div className="aboout-img">
                            <img className="" src={require("./img/afroz-shaik.jpeg")} alt="me"/>
                        </div>
                    </div>
                    </Fade>
                    <div className="col-md-7 offset-lg-1">
                        <Fade bottom cascade>
                        <div className="about-text">
                            <div className="row">
                                <div className="col-lg-4 col-4">
                                    <ul className="info">
                                        <li className="font-weight-bold">
                                            Name
                                        </li>
                                        <li className="font-weight-bold">
                                            E-mail
                                        </li>
                                        <li className="font-weight-bold">
                                            Github
                                        </li>
                                        <li className="font-weight-bold">
                                            Location
                                        </li>
                                    </ul>
                                </div>  
                                <div className="col-lg-8 col-8">
                                    <ul>
                                        <li>
                                            <span>:</span>
                                            Afroz Shaik
                                        </li>
                                        <li>
                                            <span>:</span>
                                            afrozshaik2580@gmail.com
                                        </li>
                                        <li>
                                            <span>:</span>
                                            https://github.com/afrozshaik2580
                                        </li>
                                        <li>
                                            <span>:</span>
                                            India
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4>I am Afroz Shaik, Web Developer</h4>
                                    <p>I am Afroz Shaik and I am from India. Taking Web Development as a profession not only fulfills my pocket but also my heart because it has been my passion since my early teenage.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="social-links">
                                        <h5>Find Me on Social Media:</h5>
                                        <ul>
                                            <li>
                                                <a target="_blank" href="https://github.com/afrozshaik2580/"><i className="fab fa-github"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.linkedin.com/in/afrozshaik2580/"><i className="fab fa-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.facebook.com/afrozshaik2580"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://twitter.com/afrozshaik2580"><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/rage_afroz/"><i className="fab fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;