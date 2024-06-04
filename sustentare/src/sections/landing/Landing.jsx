import styles from "./Landing.module.css"
import telefone from "../../assets/cellphone.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Landing() {
    return (
        <>
            <section id="landing" className={styles.landing}>
                <div>
                    <div>
                        <h1>Tecnologia de ponta,<br/>na palma das suas mãos.</h1>
                        <p>
                            De projetos simples a complexos, a Sustentare te ajuda
                            a solucionar problemas e a tornar seus projetos realidade.
                        </p>
                        <button>
                            <FontAwesomeIcon icon="envelope-open-text" className="icon"/>    
                            Nosso email
                        </button>
                    </div>
                    <div>
                        <img 
                        src={telefone} 
                        alt="Imagem de um celular com nosso aplicativo Paralelo 19."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}