import React from "react";
import { Fade } from "react-reveal";

function Project(props){
    return(
        <Fade bottom>
        <div className="col-lg-4 col-md-6 mix">
            <div className="project-box">
                <div className="project-img">
                    <img src={require("./img/project/"+props.imgName)} alt={props.imgName}/>
                </div>
                <div className="project-link">
                    <h4>{props.name}</h4>
                    <a className="live-link" href={"https://afrozshaik2580.github.io/"+props.githubName} target="_blank">
                        Live
                    </a>
                    <a href={"https://github.com/afrozshaik2580/"+props.githubName} target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <h6>{props.teckStack}</h6>
            </div>
        </div>
        </Fade>
    )
}
export default Project;