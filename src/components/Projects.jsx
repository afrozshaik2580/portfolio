import React from "react";
import Project from "./Project";
function Projects(){
    return(
        <section id="project" className="project-section section-bg pt-100 pb-100">
            <div className="container">
               <div className="section-title">
                   <h2>Personal Project</h2>
               </div>

                <div id="Container" className="row">
                    <Project
                        name="Foot Stall Management"
                        imgName="foodstall.png"
                        githubName="food-stall-management"
                        teckStack="Java"
                    />
                    <Project
                        name="Vegan Store"
                        imgName="veganstore.png"
                        githubName="veganstore"
                        teckStack="HTML"
                    />
                    <Project
                        name="Tindog"
                        imgName="tindog.png"
                        githubName="tindog"
                        teckStack="HTML"
                    />
                    <Project
                        name="Keeper App"
                        imgName="keeper-app.png"
                        githubName="keeper-app"
                        teckStack="React"
                    />
                    <Project
                        name="Book Stall Management"
                        imgName="bookstall.png"
                        githubName="BookStallManagement"
                        teckStack="Java"
                    />
                </div>
            </div>
        </section>
    )
}
export default Projects;