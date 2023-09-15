import React from "react";
import {Fade,Zoom} from "react-reveal";
function Contact(){
    return(
        <section id="contact" className="contact-section section-bg pt-100 pb-70">
            <div className="container">
                <Fade bottom>
                <div className="section-title text-center">
                    <h2>Contact Me</h2>
                </div>
                </Fade>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>          
                    </div>
                    <Fade bottom>
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <form id="my-form" action="mailto:afrozshaik2580@gmail.com" method="POST">
                                <div className="row">
                                    <Fade bottom>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="">Your Name</label>
                                            <input type="text"className="form-control" name="name" placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="">Your Email</label>
                                            <input type="email" className="form-control" name="email" placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="">Your Subject</label>
                                            <input type="text" className="form-control" name="subject" placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="">Your Message</label>
                                            <textarea className="form-control" name="message" rows="6" required></textarea>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                                <Zoom>
                                <div className="contact-btn text-center">
                                    <button type="submit" className="all-btn">Send Message</button>
                                </div>
                                </Zoom>
                            </form>

                            <p className="text-center" id="status">Success! Thanks for contacting.</p>
                        </div>
                    </div>
                    </Fade>
                    <div className="col-lg-2">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        </section> 
    )
}
export default Contact;