import React from "react";
import classes from "./ButtonRegister.module.css"
import lightning from "./../../../assets/images/lightning.svg"

const ButtonRegister = () =>{
    return(
        <div className={classes.buttonRegister}>
                <a href="#register-form">
                    <div className={classes.buttonRegisterInner}>
                        <span>ЗАРЕГИСТРИРОВАТЬСЯ НА КУРС</span>
                        <img src={lightning} alt="img"/>
                    </div>
                </a>
            </div>
    );
}

export default ButtonRegister