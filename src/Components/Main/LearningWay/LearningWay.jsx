import React from "react";
import classes from "./LearningWay.module.css"
import learning_way from "./../../../assets/images/learning_way.svg"

const LearningWay = () =>{
    return(
        <div className={classes.learningWay}>
                <img src={learning_way} alt=""/>
            </div>
    );
}
export default LearningWay