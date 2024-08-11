import React from "react";
import classes from "./Review.module.css"
import Left from "./../../../assets/images/left.svg"
import Girl from "./../../../assets/images/Girl.jpg"
import Ivan from "./../../../assets/images/Ivan.jpg"
import Right from "./../../../assets/images/right.svg"

const Review = () => {
    return (
        <div>
            <div className={classes.topReview}>
                <h3>Уже научились играть</h3>
            </div>
            <div className={classes.reviewContainer}>
                <div className={classes.left}>
                    <a href="#">
                        <img src={Left} alt="Left arrow" />
                    </a>
                </div>
                <div className={classes.reviewCarousel}>
                    <div className={classes.review}>
                        <div className={classes.boxReview}>
                            <div className={classes.circleImage} style={{ backgroundImage: `url(${Girl})` }}></div>
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
                            <div className={classes.circleImage} style={{ backgroundImage: `url(${Ivan})` }}></div>
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
                        <img src={Right} alt="Right arrow" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Review;