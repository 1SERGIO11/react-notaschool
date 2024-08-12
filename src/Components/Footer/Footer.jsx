import React from "react";
import classes from "./Footer.module.css"
import Inst from "./../../assets/images/inst.svg"
import Tg from "./../../assets/images/tg.svg"
import Vk from "./../../assets/images/vk.svg"
import YouTube from "./../../assets/images/youtube.svg"
import TikTok from "./../../assets/images/tik-tok.svg"

const Footer = () =>{
    return(
        <footer className={classes.footer}>
            <div className={classes.socNet}>
                <a href="https://www.instagram.com/_not_a_school?igsh=eDl4YWZnMng4YWFn"><img src={Inst} alt=""/></a>
                <a href="https://t.me/nota_school"><img src={Tg} alt=""/></a>
                <a href="https://vk.com/nota_school"><img src={Vk} alt=""/></a>
                <a href="https://www.youtube.com/channel/UC4FSl_03zrmAi1nUv7lSDpw"><img src={YouTube} alt=""/></a>
                <a href="https://www.tiktok.com/@_notaschool_"><img src={TikTok} className={classes.tikTok} alt=""/></a>
            </div>
        </footer>
    );
}
export default Footer