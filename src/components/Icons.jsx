import React from "react";
import Icon from "./Icon";
import {Fade} from "react-reveal";
function Icons(){
    return(
        <section className="icon-section section-bg pt-100 pb-70">
            <div className="container">
                <Fade bottom cascade>
                <div className="section-title">
                    <h2>Expert in Software</h2>
                </div>
                <div className="row">
                    <Icon name="Java" imgName="java.png"/>
                    <Icon name="Python" imgName="python.png"/>
                    <Icon name="C" imgName="c.svg"/>
                    <Icon name="Spring Boot" imgName="spring.svg"/>
                    <Icon name="Hibernate" imgName="hibernate.svg"/>
                    <Icon name="Thymeleaf" imgName="thymeleaf.svg"/>
                    <Icon name="SQL" imgName="sql.svg"/>
                    <Icon name="HTML" imgName="html.svg"/>
                    <Icon name="CSS" imgName="css.svg"/>
                    <Icon name="JavaScript" imgName="javascript.svg"/>
                    <Icon name="React" imgName="react.svg"/>
                    <Icon name="Bootstrap" imgName="bootstrap.svg"/>
                    <Icon name="Github" imgName="github.svg"/>
                    <Icon name="IOT" imgName="iot.svg"/>
                </div>
                </Fade>
            </div>
        </section>
    )
}
export default Icons;