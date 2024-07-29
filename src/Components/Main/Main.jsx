import React from "react";
import classes from "./Main.module.css"
import Andrey from "./../../assets/images/Andrey.png"
import Guitar from "./../../assets/images/Guitar.svg"
import Left from "./../../assets/images/left.svg"
import Girl from "./../../assets/images/Girl.jpg"
import Ivan from "./../../assets/images/Ivan.jpg"
import Right from "./../../assets/images/right.svg"
import Heart from "./../../assets/images/heart.svg"
import Mediator from "./Mediator/Mediator.jsx";
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import LearningWay from "./LearningWay/LearningWay";
import BoxSystem from "./BoxSystem/BoxSystem";
import RegisterForm from "./RegisterForm/RegisterForm";

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
            <div className={classes.topReview}>
                <h3>Уже научились играть</h3>
            </div>
            <div className={classes.reviewContainer}>
                <div className={classes.left}>
                    <a href="#">
                        <img src={Left} alt="Left arrow"/>
                    </a>
                </div>
                <div className={classes.reviewCarousel}>
                    <div className={classes.review}>
                        <div className={classes.boxReview}>
                            <div className={classes.circleImage} style={{backgroundImage: `url(${Girl})`}}></div>
                            <div className={classes.reviewerName}>
                                <h5>Диана Цветкова</h5>
                            </div>
                            <div className={classes.textReview}>
                                <p>NotaSchool превзошла все мои ожидания! Благодаря телеграмм-боту и сообществу учеников, обучение прошло легко и интересно. Дополнительные материалы помогли быстро освоить основы гитары. Очень рекомендую!</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.review}>
                        <div className={classes.boxReview}>
                            <div className={classes.circleImage} style={{backgroundImage: `url(${Ivan})`}}></div>
                            <div className={classes.reviewerName}>
                                <h5>Иван Петров</h5>
                            </div>
                            <div className={classes.textReview}>
                                <p>Обучение в NotaSchool было фантастическим! Я никогда не думал, что смогу так быстро освоить гитару. Преподаватели очень поддерживали и помогали на каждом шагу. Курсы действительно стоящие, и я рекомендую их всем, кто хочет научиться играть на гитаре.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className={classes.right}>
                    <a href="#">
                        <img src={Right} alt="Right arrow"/>
                    </a>
                </div>
            </div>
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