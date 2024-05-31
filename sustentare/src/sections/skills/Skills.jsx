import styles from "./Skills.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Skills(){
    return (
        <>
            <section className={styles.skills}>
                <div>
                    <h2>
                        Equipe experiente e adaptativa, com mais de
                         16 anos de experiência
                    </h2>
                    <p>
                    Os profissionais da Sustentare conhecem as
                     tecnologias e padrões mais utilizados no
                     mercado, extraindo o melhor do tradicional
                     e colocando o novo à prova.
                    </p>
                    <div className={styles.skillIcons}>
                        <div>
                            <FontAwesomeIcon icon="magnifying-glass-chart" className={styles.icon}/>
                            <h3>Análise de Dados e BI</h3>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="file-code" className={styles.icon} />
                            <h3>Desenvolvimento Web e Back-end</h3>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="headset" className={styles.icon} />
                            <h3>Atendimento Help Desk e Gestão</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}