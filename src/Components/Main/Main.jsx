import React from "react";
import classes from "./Main.module.css"
import Andrey from "./../../assets/images/Andrey.png"

import Mediator from "./Mediator/Mediator.jsx";
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import LearningWay from "./LearningWay/LearningWay";
import BoxSystem from "./BoxSystem/BoxSystem";
import RegisterForm from "./RegisterForm/RegisterForm";
import Review from "./Review/Review.jsx"
import Donate from "./Donate/Donate";
import CourseElement from "./CourseElement/CourseElement";

const Main = () =>{
    return(
        <main className={classes.main}>
            <div className={classes.topText}>
                <h5>Научитесь играть на гитаре</h5>
                <h1>За 10 ЗАНЯТИЙ</h1>
            </div>
            <Mediator/>
            <ButtonRegister/>
            <LearningWay/>
            <BoxSystem/>
            
            <div className={classes.andr}>
                <img src={Andrey} alt=""/>
                <h5>Андрей Акст</h5>
            </div>
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