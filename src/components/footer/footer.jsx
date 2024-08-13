import styles from './footer.module.css'
import f1 from './f1.svg'
import i1 from './i1.svg'
import t1 from './t1.svg'
export default function Footer(){
    return(
        <div className={styles.container}>
            <p className={styles.first}>
                Authortie<br></br><span>© Все права защищены</span>
            </p>
            <ul className={styles.nav}>
                <li>Политика конфиденциальности</li>
                <li>Аналитика</li>
                <li>Сообщество</li>
                <li>Для организаций</li>
            </ul>
            <ul className={styles.soc}>
                <li><img src={f1} alt="#"/></li>
                <li><img src={i1} alt="#"/></li>
                <li><img src={t1} alt="#"/></li>
            </ul>
        </div>
    )
}