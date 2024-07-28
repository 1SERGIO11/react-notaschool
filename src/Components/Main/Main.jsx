import React from "react";
import classes from "./Main.module.css"
import lightning from "./../../assets/images/lightning.svg"
import learning_way from "./../../assets/images/learning_way.svg"
import Sergio from "./../../assets/images/Sergio.png"
import Andrey from "./../../assets/images/Andrey.png"
import Guitar from "./../../assets/images/Guitar.svg"
import Left from "./../../assets/images/left.svg"
import Girl from "./../../assets/images/Girl.jpg"
import Ivan from "./../../assets/images/Ivan.jpg"
import Right from "./../../assets/images/right.svg"
import Heart from "./../../assets/images/heart.svg"
import Mediator from "./../../assets/images/mediator.svg"

const Main = () =>{
    return(
        <main className={classes.main}>
            <div className={classes.topText}>
                <h5>Научитесь играть на гитаре</h5>
                <h1>За 10 ЗАНЯТИЙ</h1>
            </div>

            <div className={classes.mediator}>
                <div className={classes.mediatorInner} style= {{backgroundImage: `url(${Mediator})` }}>
                    <div className={classes.mediatorTopText}>
                        <h6>Курс для начинающих</h6>
                        <h2>"ШАГ ВПЕРЁД"</h2>
                    </div>
                    <div className={classes.mediatorBottomText}>
                        <p>Готов стать гитарной легендой за 10 дней?</p>
                    </div>
                </div>
            </div>

            <div className={classes.buttonRegister}>
                <a href="#register-form">
                    <div className={classes.buttonRegisterInner}>
                        <span>ЗАРЕГИСТРИРОВАТЬСЯ НА КУРС</span>
                        <img src={lightning} alt="img"/>
                    </div>
                </a>
            </div>

            <div className={classes.learningWay}>
                <img src={learning_way} alt=""/>
            </div>

            <div className={classes.me}>
                <h5>Сергей Уткин</h5>
                <img src={Sergio} alt=""/>
            </div>

            <div className={classes.boxSystem}>
                <div className={classes.contaner}>
                    <h3>Почему наша система работает?</h3>
                </div>
            </div>

            <div className={classes.details}>
                <div className={classes.box}>
                    <p>На занятиях даётся тот объём информации,
который ученик может усвоить и не 
запутаться</p>
                </div>
                <div className={classes.box}>
                    <p>Ученики сразу начинают играть на гитаре, 
                        что помогает быстрее освоить инструмент 
                        и сохранять интерес к обучению.
                        </p>
                </div>
                <div className={classes.box}>
                    <p>Ученик может заниматься в своём темпе, 
                        что обеспечивает комфортное и 
                        эффективное обучение.</p>
                </div>
            </div>
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
            <div className={classes.registerForm} id="register-form">
                <div className={classes.formContainer}>
                    <form action="">
                        <div className={classes.topForm}>
                            <span className={classes.reg}>Регистрация на </span><span className={classes.courseGrad}>КУРС</span>
                            <span className={classes.prize}><br/>Бесплатный урок в ПОДАРОК!</span>
                        </div>
                        <input type="text" placeholder="Имя" className={classes.inputForm}/>
                        <input type="email" placeholder="Email" className={classes.inputForm}/>
                        <input type="tel" placeholder="Телефон" className={classes.inputForm}/>
                        <button type="submit" className={classes.btnReg}>
                            <a href="">
                                <div className={classes.btnRegisterInner}>
                                    <h5>Записаться</h5>
                                </div>
                            </a>
                        </button>
                    </form>
                </div>
            </div>
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