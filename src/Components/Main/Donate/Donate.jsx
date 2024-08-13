import React from "react";
import classes from "./Donate.module.css"
import Heart from "./../../../assets/images/heart.svg"

const Donate = () =>{
    return(
        <div className={classes.donate}>
                <a href="https://www.donationalerts.com/r/notaschool">
                    <div className={classes.donateInner}>
                        <img src={Heart} alt=""/>
                        <h5>Поддержать автора
                            материально</h5>
                    </div>
                </a>
            </div>
    )
}

export default Donate;