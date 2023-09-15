import React from "react";
import SkillCard from "./SkillCard";
import EducationBox from "./EducationBox";
import {Fade} from "react-reveal";
function Skill(){
    return(
        <section id="skill" className="skill-section pt-100 pb-70">
            <div className="container">
            <Fade bottom cascade>
                <div className="section-title">
                    <h2>My Skills & Resume</h2>
                </div>
                
                <div className="row">
                    <SkillCard 
                        name="Coding Skills"
                        items={["Java/Python/C","HTML/CSS/JS","React/Bootstrap/MaterialUI","MySQL"]}
                    />
                    <SkillCard
                        name="Tools & Technologies"
                        items={["Visual Studio Code","Eclipse","Spring Boot","Hibernate/MVC"]}
                    />
                    <SkillCard
                        name="Industry Knowledge"
                        items={["Web Development","Responsive Web Design","Full Stack Web Development","React Website"]}
                    />
                    <SkillCard
                        name="Other Skills"
                        items={["Internet of Things (IoT)","Basic Computer","Learning Attitude","And so on.."]}
                    />
                    <SkillCard
                        name="Language Skills"
                        items={["English","Hindi","Telugu","Urdu"]}
                    />
                    <SkillCard
                        name="Interests"
                        items={["Coding","Learn New Things","Creating Web Apps","Black Color "]}
                    />
                </div>
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="edu-area">
                            <h3>Education</h3>
                            <EducationBox
                                name="Gayatri Vidya Parishad College of Engineering"
                                about="B.Tech in ECE, 2019 - 2023"
                                description="I have completed graduation from GVPCE."
                            />
                            <EducationBox
                                name="Sri Chaitanya Jr College"
                                about="Intermediate in Maths, Physics and Chemistry, 2017 - 2019"
                                description="I have studied MPC in Sri Chaitanya Jr College."
                            />
                            <EducationBox
                                name="Alpha High School"
                                about="SSC, 2017"
                                description="I have passed a big year at Alpha High School."
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="edu-area">
                            <h3>Experience</h3>
                            <EducationBox
                                name="Cognizant Technology Solutions"
                                about="Programmer Analyst Trainee, Sept-2023 - Present"
                                description="I worked as intern in Cognizant Technology Solutions."
                            />
                            <EducationBox
                                name="Cognizant Technology Solutions"
                                about="Intern, Mar-2023 - Jul-2023"
                                description="I worked as intern in Cognizant Technology Solutions."
                            />
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    )
}
export default Skill;