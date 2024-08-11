import React from "react";
import classes from "./Main.module.css"
import Andrey from "./../../assets/images/Andrey.png"
import Guitar from "./../../assets/images/Guitar.svg"
import Heart from "./../../assets/images/heart.svg"
import Mediator from "./Mediator/Mediator.jsx";
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import LearningWay from "./LearningWay/LearningWay";
import BoxSystem from "./BoxSystem/BoxSystem";
import RegisterForm from "./RegisterForm/RegisterForm";
import Review from "./Review/Review.jsx"

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
            <div className={`${classes.boxSystem} ${classes.course}`}>
                <div className={`${classes.contaner} ${classes.grad}`}>
                    <h3>Что ты получишь от курса?</h3>
                </div>
            </div>
            <div className={classes.guitar}>
                <img src={Guitar} alt=""/>
            </div>
            <Review/>
            <RegisterForm/>
            <div className={classes.topDonate}>
                <h3>Понравился курс?</h3>
            </div>
            <div className={classes.donate}>
                <a href="https://www.donationalerts.com/r/notaschool">
                    <div className={classes.donateInner}>
                        <img src={Heart} alt=""/>
                        <h5>Поддержать автора
                            материально</h5>
                    </div>
                </a>
            </div>

            
        </main>
    );
}

export default Main