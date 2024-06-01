import styles from "./TeamMemberCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import imgAlexandra from "../assets/team-pics/alexandra.jpeg"
import imgGabriel from "../assets/team-pics/gabriel.jpg"
import imgGus from "../assets/team-pics/gus.jpg"
import imgKlein from "../assets/team-pics/klein.jpeg"
import imgSte from "../assets/team-pics/stephany.png"

const linkLinkedin = "https://www.linkedin.com/in/"
const linkGithub = "https://github.com/"

export default function TeamMemberCard({nome, funcao, linkedin, github}) {
    var imgEscolhida = null
    switch(nome) {
        case "Alexandra H. Yara":
            imgEscolhida = imgAlexandra
            break
        case "Gabriel Q. Michelon":
            imgEscolhida = imgGabriel
            break
        case "Gustavo P. Castro":
            imgEscolhida = imgGus
            break
        case "S. Julia Justino":
            imgEscolhida = imgSte
            break
        case "Raphael Klein A.":
            imgEscolhida = imgKlein
            break
    }

    var abrirLink = url => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <>
            <div className={styles.teamMemberCard}>
                <img src={imgEscolhida} />
                <h3>{nome}</h3>
                <p>{funcao}</p>
                <div>
                    <button onClick={() => abrirLink(linkLinkedin + linkedin)}>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className={styles.icon}/>
                    </button>
                    <button onClick={() => abrirLink(linkGithub + github)}>
                        <FontAwesomeIcon icon="fa-brands fa-square-github" className={styles.icon}/>
                    </button>
                </div>
            </div>
        </>
    )
}