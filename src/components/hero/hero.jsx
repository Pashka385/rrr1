import styles from './hero.module.css'
import ull from './ull.png'
export default function Hero(){
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Сообщество взаимопомощи между учёными со всего мира</h1>
                <p>Удобный сервис, который подберёт для вас коллег и поможет наладить с ними взаимовыгодное сотрудничество в областях совместных исследований, соавторства, рецензирования и повышения индекса цитирования.</p>
                <button>Присоединиться</button>
            </div>
            <div className={styles.img}>
                <img src={ull} alt="hero"/>
            </div>
        </div>
    )
}