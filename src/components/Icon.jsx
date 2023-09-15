import React from "react";
import { Fade } from "react-reveal";
function Icon(props){
    return(
        <Fade bottom>
        <div className="col-lg-2 col-6 d-inline-block wow animate__fadeInUp" data-wow-duration="1s">
            <div className="icon-img">
                <img src={"img/skill/"+props.imgName} alt="bootstrap"/>
                <div className="icon-name">
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default Icon;