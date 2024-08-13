import React from "react";
import classes from "./CourseElement.module.css"
import Guitar from "./../../../assets/images/Guitar.svg"

const CourseElement = () => {
    return (
        <div>
            <div className={`${classes.boxSystem} ${classes.course}`}>
                <div className={`${classes.contaner} ${classes.grad}`}>
                    <h3>Что ты получишь от курса?</h3>
                </div>
            </div>
            <div className={classes.guitar}>
                <img src={Guitar} alt="" />
            </div>
        </div>
    )
}

export default CourseElement;