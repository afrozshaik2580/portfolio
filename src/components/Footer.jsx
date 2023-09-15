import React from "react";
import { Fade } from "react-reveal";

function Footer(){
    return(
        <Fade bottom>
        <footer>
            <div className="container">
                <div className="social-link">
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/afrozshaik2580"><i className="fab fa-linkedin-in text-center"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/afrozshaik2580"><i className="fab fa-facebook-f text-center"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/afrozshaik2580"><i className="fab fa-twitter text-center"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/rage_afroz"><i className="fab fa-instagram text-center"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="mailto:afrozshaik2580@gmail.com"><i className="far fa-envelope text-center"></i></a>
                        </li>
                    </ul>
                </div>
                <p>© 2023 Afroz Shaik | All Right Reserved </p>
            </div>
        </footer>
        </Fade>
    )
}
export default Footer;