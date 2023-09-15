import React from "react";
import {Fade} from "react-reveal";
function EducationBox(props){
    return(
        <div className="edu-box wow animate__fadeInUp" data-wow-duration="1s">
            <Fade bottom cascade duration="500">
            <h4>{props.name}</h4>
            <h6>{props.about}</h6>
            <p>{props.description}</p>
            </Fade>
        </div>
    )
}
export default EducationBox;