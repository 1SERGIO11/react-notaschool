import React, { useEffect } from "react";
import classes from "./Review.module.css";
import Left from "./../../../assets/images/left.svg";
import Girl from "./../../../assets/images/Girl.jpg";
import Ivan from "./../../../assets/images/Ivan.jpg";
import Right from "./../../../assets/images/right.svg";

const Review = () => {
    useEffect(() => {
        const leftArrow = document.getElementsByClassName(classes.left)[0]?.querySelector('a');
        const rightArrow = document.getElementsByClassName(classes.right)[0]?.querySelector('a');
        const carousel = document.getElementsByClassName(classes.reviewCarousel)[0];

        if (leftArrow && rightArrow && carousel) {
            leftArrow.addEventListener('click', (e) => {
                e.preventDefault();
                carousel.scrollBy({
                    left: -carousel.clientWidth,
                    behavior: 'smooth'
                });
            });

            rightArrow.addEventListener('click', (e) => {
                e.preventDefault();
                carousel.scrollBy({
                    left: carousel.clientWidth,
                    behavior: 'smooth'
                });
            });

            let isDown = false;
            let startX;
            let scrollLeft;

            carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                carousel.classList.add('active');
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            });

            carousel.addEventListener('mouseleave', () => {
                isDown = false;
                carousel.classList.remove('active');
            });

            carousel.addEventListener('mouseup', () => {
                isDown = false;
                carousel.classList.remove('active');
            });

            carousel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 3;
                carousel.scrollLeft = scrollLeft - walk;
            });

            const registerLink = document.querySelector('.button-register a');
            if (registerLink) {
                registerLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector('#register-form');
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }

            return () => {
                leftArrow.removeEventListener('click', () => {});
                rightArrow.removeEventListener('click', () => {});
                carousel.removeEventListener('mousedown', () => {});
                carousel.removeEventListener('mouseleave', () => {});
                carousel.removeEventListener('mouseup', () => {});
                carousel.removeEventListener('mousemove', () => {});
                if (registerLink) {
                    registerLink.removeEventListener('click', () => {});
                }
            };
        }
    }, [classes]);

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
    );
}

export default Review;
