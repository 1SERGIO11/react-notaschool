import React from "react";
import classes from "./RegisterForm.module.css"

const RegisterForm = () =>{
    return(
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
    );
}
export default RegisterForm