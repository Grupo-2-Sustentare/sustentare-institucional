import styles from "./Footer.module.css"

import logo from "../../assets/brand-images/logomarca.png"

export default function Footer(){
    return (
        <>
            <footer>
                <div>
                    <img src={logo} alt="Logomarca da sustentare" />
                </div>
                <div>
                    <h4>Contato</h4>
                    <a href="mailto:DEFINIR">sustentare@dev.com.br</a>
                </div>
                <div>
                    <h4>Mapa do Site</h4>
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Experiência</a></li>
                        <li><a href="">Equipe</a></li>
                        <li><a href="">Valores</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}