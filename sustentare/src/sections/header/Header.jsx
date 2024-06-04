import styles from "./Header.module.css"
import logoMarca from "../../assets/brand-images/logomarca.png"

export default function Header () {
    return (
        <>
            <nav id="nav">
                <div>
                    <div className={styles.containerImg}>
                        <img src={logoMarca}></img>
                    </div>
                    <ul className={styles.containerLinks}>
                        <li><a href="#nav">Início</a></li>
                        <li><a href="#team">Sobre Nós</a></li>
                        <li><a href="#values">Valores</a></li>
                    </ul>
                    <div className={styles.containerBotao}>
                        <a href="mailto:EMAIL">
                            <button>Contate-nos</button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}