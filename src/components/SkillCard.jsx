import React from "react";
import {Fade} from"react-reveal";
function SkillCard(props){
    return(
        <Fade bottom>
        <div className="col-lg-4 col-sm-6">
            <div className="skill-box wow animate__fadeInUp" data-wow-duration="1s">
                <h6>{props.name}</h6>
                <div className="skill-list">
                    <ul>
                        <Fade bottom>
                        {props.items.map((item)=>{return(
                            <li>
                                <i className="far fa-dot-circle"></i>
                                {item}
                            </li>
                        )})}
                        </Fade>
                    </ul>
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default SkillCard;