import React from "react"
import classes from "./Header.module.css"
import Logo from "../../assets/images/LOGO.svg"

const Header = () =>{
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={Logo} alt="Logo"/>
            </div>
        </header>
    )
}

export default Header