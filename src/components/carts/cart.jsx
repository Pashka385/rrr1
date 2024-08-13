import React, { useState } from 'react';
import styles from './carts.module.css';
import vector1 from './Icons/Vector.png';
import personLogo from './Icons/person.png';
import collion from './Icons/coolicon(1).png';
import { DATA } from './DATA';

export default function Carts() {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <div className={styles.carts}>
            <div className={styles.container}>
                <h1 className={styles.title}>Сообщество</h1>
                <p className={styles.subtitle}>Тысячи учёных уже предлагают свою помощь</p>
                <div className={styles.box}>
                    {DATA.slice(0, showAll ? DATA.length : 2).map((item, index) => (
                        <div className={styles.cart} key={index}>
                            <div className={styles.cart__btn}>
                                <button className={styles.btn__yeallow}>
                                    {item.YeallowBTN}
                                </button>
                                <button className={styles.btn__green}>
                                    {item.GreenBTN}
                                </button>
                            </div>
                            <div className={styles.cart__text}>
                                <p className={styles.cart__title}>
                                    {item.CartTitle}
                                </p>
                                <div className={styles.comment}>
                                    <p className={styles.comment__title}>Комментарий</p>
                                    <p className={styles.comment__text}>
                                        {item.CommentText}
                                    </p>
                                </div>
                                <div className={styles.reward}>
                                    <p className={styles.reward__title}>Вознаграждение</p>
                                    <p className={styles.reward__elem}>
                                        <img src={item.RewardImg} alt='icon' />
                                        {item.RewardText}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.key}>
                                <button className={styles.key__btn}>
                                    <img src={vector1} alt="-" />
                                    <p>{item.key__btn1}</p>
                                </button>
                                <button className={styles.key__btn}>
                                    <img src={vector1} alt="-" />
                                    <p>{item.key__btn2}</p>
                                </button>
                                <button className={styles.key__btn}>
                                    <img src={vector1} alt="-" />
                                    <p>{item.key__btn3}</p>
                                </button>
                            </div>
                            <div className={styles.person}>
                                <img src={personLogo} alt="person" />
                                <div className={styles.person__text}>
                                    <p><b>Артём Белоусов</b> 🇷🇺</p>
                                    <p>учёный (кандидат наук)</p>
                                    <p>Санкт-Петербургский горный университет</p>
                                </div>
                            </div>
                            <div className={styles.feedback}>
                                <button className={styles.feedback__btn}>Предложить сотрудничество</button>
                                <button className={styles.circle}>
                                    <img src={collion} alt="collion" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.btn_more}>
                    <button onClick={handleToggle}>
                        {showAll ? 'Скрыть' : 'Смотреть все'}
                    </button>
                </div>
            </div>
        </div>
    );
}

