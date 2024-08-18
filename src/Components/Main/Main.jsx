import React from "react";
import classes from "./Main.module.css"
import Mediator from "./Mediator/Mediator.jsx";
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import LearningWay from "./LearningWay/LearningWay";
import BoxSystem from "./BoxSystem/BoxSystem";
import RegisterForm from "./RegisterForm/RegisterForm";
import Review from "./Review/Review.jsx"
import Donate from "./Donate/Donate";
import CourseElement from "./CourseElement/CourseElement";
import Andr from "./Andr/Andr";
import TopText from "./TopText/TopText";

const Main = () =>{
    return(
        <main className={classes.main}>
            <TopText/>
            <Mediator/>
            <ButtonRegister/>
            <LearningWay/>
            <BoxSystem/>
            <Andr/>
            <CourseElement/>
            <Review/>
            <RegisterForm/>
            <div className={classes.topDonate}>
                <h3>Понравился курс?</h3>
            </div>
            <Donate/>
        </main>
    );
}

export default Main