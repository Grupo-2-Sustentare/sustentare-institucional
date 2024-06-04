import styles from "./Header.module.css"
import logoMarca from "../../assets/brand-images/logomarca.png"

import enviarEmail from "../../assets/sendEmail"


export default function Header () {
    return (
        <>
            <nav id="nav">
                <div>
                    <div className={styles.containerImg}>
                        <a href="#landing">
                            <img src={logoMarca}></img>
                        </a>
                    </div>
                    <ul className={styles.containerLinks}>
                        <li><a href="#landing">Início</a></li>
                        <li><a href="#team">Sobre Nós</a></li>
                        <li><a href="#values">Valores</a></li>
                    </ul>
                    <div className={styles.containerBotao}>
                        <button onClick={enviarEmail}>Contate-nos</button>
                    </div>
                </div>
            </nav>
        </>
    )
}