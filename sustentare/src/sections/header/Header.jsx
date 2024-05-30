import React from "react";
import styles from "./Header.module.css"
import logoMarca from "../../assets/brand-images/logomarca.png"

const Header = () => {
    return (
        <>
            <nav>
                <div>
                    <div className={styles.containerImg}>
                        <img src={logoMarca}></img>
                    </div>
                    <ul className={styles.containerLinks}>
                        <li>Início</li>
                        <li>Sobre Nós</li>
                        <li>Valores</li>
                    </ul>
                    <div className={styles.containerBotao}>
                        <button>Contate-nos</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;