import styles from './works.module.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

export default function Works() {
    return (
        <div className={styles.works}>
            <div className={styles.container}>
                <div className={styles.title}><h1>Как это работает</h1></div>
                <div className={styles.box}>
                    <div className={`${styles.itemWrapper}`}>
                        <div className={`${styles.item} ${styles.first}`} id='work-step-1'>
                            <img src={img1} alt="1" />
                        </div>
                        <span className={styles.text}>Оцените привлекательность темы</span>
                    </div>
                    <div className={`${styles.itemWrapper}`}>
                        <div className={`${styles.item} ${styles.second}`} id='work-step-2'>
                            <img src={img2} alt="2" />
                        </div>
                        <span className={styles.text}>Выполните совместные исследования</span>
                    </div>
                    <div className={`${styles.itemWrapper}`}>
                        <div className={`${styles.item} ${styles.three}`} id='work-step-3'>
                            <img src={img3} alt="3" />
                        </div>
                        <span className={styles.text}>Улучшите написанную работу</span>
                    </div>
                    <div className={`${styles.itemWrapper}`}>
                        <div className={`${styles.item} ${styles.fourth}`} id='work-step-4'>
                            <img src={img4} alt="4" />
                        </div>
                        <span className={styles.text}>Продвиньте работу сейчас</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
