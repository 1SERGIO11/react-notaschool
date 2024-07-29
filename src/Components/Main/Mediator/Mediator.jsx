import React from "react";
import classes from "./Mediator.module.css"
import MediatorImage from "./../../../assets/images/mediator.svg"

const Mediator = () =>{
    return(
        <div className={classes.mediator}>
                <div className={classes.mediatorInner} style= {{backgroundImage: `url(${MediatorImage})` }}>
                    <div className={classes.mediatorTopText}>
                        <h6>Курс для начинающих</h6>
                        <h2>"ШАГ ВПЕРЁД"</h2>
                    </div>
                    <div className={classes.mediatorBottomText}>
                        <p>Готов стать гитарной легендой за 10 дней?</p>
                    </div>
                </div>
            </div>
    );
}
export default Mediator
