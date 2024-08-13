import styles from './header.module.css';
import logo from './logo.png';
import chats from './chats.png';
import notif from './notifications.png';
import profil from './profile.png';
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

    function openBurger() {
        setOpen(true);
        const x = document.querySelector(`.${styles.burger__container}`);
        if (x) {
            x.classList.add('active');
            console.log('Open');
        }
    }

    function closeBurger() {
        setOpen(false);
        const x = document.querySelector(`.${styles.burger__container}`);
        if (x) {
            x.classList.remove('active');
            console.log('Close');
        }
    }

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>Аналитика</li>
                        <li>Сообщество</li>
                        <li>Для организации</li>
                    </ul>
                </div>
                <div className={styles.feedback}>
                    <button>Создать заявку</button>
                    <div className={styles.icons}>
                        <img src={chats} alt="chats" />
                        <img src={notif} alt="notif" />
                        <img src={profil} alt="profil" />
                        <div onClick={openBurger} className={styles.burger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                {open && (
                    <div className={styles.burger__container}>
                        <ul>
                            <button onClick={closeBurger}>Close</button>
                            <li>Аналитика</li>
                            <li>Сообщество</li>
                            <li>Для организации</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
