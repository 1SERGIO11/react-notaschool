import React from "react";
import classes from "./BoxSystem.module.css"
import Sergio from "./../../../assets/images/Sergio.png"


const BoxSystem = () =>{
    return(
        <div>
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
        </div>
    );
}

export default BoxSystem