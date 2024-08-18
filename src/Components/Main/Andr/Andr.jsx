import React from "react";
import classes from "./Andr.module.css"
import Andrey from "./../../../assets/images/Andrey.png"

const Andr = () =>{
    return(
        <div className={classes.andr}>
                <img src={Andrey} alt=""/>
                <h5>Андрей Акст</h5>
            </div>
    )
}

export default Andr